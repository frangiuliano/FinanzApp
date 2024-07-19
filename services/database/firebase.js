import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXz7vFzLXmRZ4vkNB6GxZGBuHpLuaTKFo",
  authDomain: "finanzapp-2024.firebaseapp.com",
  projectId: "finanzapp-2024",
  storageBucket: "finanzapp-2024.appspot.com",
  messagingSenderId: "61893075484",
  appId: "1:61893075484:web:4a1f7732105feb33ccf5d9",
  measurementId: "G-WF45VT65WL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();

const sarasa = db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

export default firebase;
export { db, sarasa };
