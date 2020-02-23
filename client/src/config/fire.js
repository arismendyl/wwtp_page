import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBB7WpZKwePWB_SrzxO5mwk9h52ioeWHjs",
    authDomain: "wwtp-a465a.firebaseapp.com",
    databaseURL: "https://wwtp-a465a.firebaseio.com",
    projectId: "wwtp-a465a",
    storageBucket: "wwtp-a465a.appspot.com",
    messagingSenderId: "450878360678",
    appId: "1:450878360678:web:0573beb82870f650a271a7",
    measurementId: "G-HR9L68MY6E"
};

const fire= firebase.initializeApp(firebaseConfig);
export default fire;
