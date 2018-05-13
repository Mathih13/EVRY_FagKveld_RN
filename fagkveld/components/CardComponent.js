import React from 'react';
import {Image} from 'react-native'
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Text} from 'native-base'

export default class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.authorPhoto}}/>
                        <Body>
                        <Text> {this.props.authorName} </Text>
                        <Text note>{new Date(this.props.createdAt).toDateString()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{uri: this.props.imageURL}}
                        style={{height: 200, width: null, flex: 1}}
                    />
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button  style={{padding: 5}} transparent>
                            <Icon name={'ios-heart-outline'} style={{color: 'black'}}/>
                        </Button>
                        <Button style={{padding: 5}} transparent>
                            <Icon name={'ios-chatbubbles-outline'} style={{color: 'black'}}/>
                        </Button>
                        <Button style={{padding: 5}} transparent>
                            <Icon name={'ios-send-outline'} style={{color: 'black'}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text note style={{margin: 10}}>
                            {this.props.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
