import React from 'react';
import {StyleSheet, StatusBar, ActivityIndicator, View} from 'react-native';
import {Text, Icon, Container, Content} from 'native-base'
import CardComponent from '../components/CardComponent'
import firebase from "../firebase";


export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: null
        }
    }

    static navigationOptions = {
        headerLeft: <Icon name={'ios-camera-outline'} style={{paddingLeft: 10}}/>,
        title: "Timeline",
        headerRight: <Icon name={'ios-send-outline'} style={{paddingRight: 10}}/>
    };


    componentWillMount() {
        let component = this;
        firebase.database().ref('/posts/').once('value')
            .then(snapshot => {
                let postArray = firebase.toArray(snapshot);
                component.setState({data: postArray, loading: false})
            })
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                />
                <Content>
                    {this.state.loading && <ActivityIndicator style={{margin: 20}} size="large" color="#000"/>}
                    {!this.state.loading &&
                    <View>
                        {this.state.data.map((post) => {
                            console.log(post);
                            return (
                                <CardComponent
                                    key={post.key}
                                    authorName={post.author.username}
                                    authorPhoto={post.author.photoURL}
                                    createdAt={post.createdAt}
                                    imageURL={post.imageURL}
                                    description={post.description}
                                    likes={post.likes}
                                />
                            )
                        })}
                    </View>
                    }
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});