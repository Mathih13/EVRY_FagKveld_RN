import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC2PcR1omxTte292CKtEZsY7c2J_wwehEU",
    authDomain: "fagkveld-4d9ba.firebaseapp.com",
    databaseURL: "https://fagkveld-4d9ba.firebaseio.com",
    projectId: "fagkveld-4d9ba",
    storageBucket: "",
    messagingSenderId: "97193722274"
};

// Helper function for easy data management
// in the app screens/reducers
firebase.toArray = (snapshot) => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase