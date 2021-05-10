import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAfw0820cs80QQ_f6oGvjY6-0yL9HnZIqY',
  authDomain: 'tripleearplatform.firebaseapp.com',
  projectId: 'tripleearplatform',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase
