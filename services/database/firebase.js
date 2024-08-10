import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCXz7vFzLXmRZ4vkNB6GxZGBuHpLuaTKFo",
  authDomain: "finanzapp-2024.firebaseapp.com",
  projectId: "finanzapp-2024",
  storageBucket: "finanzapp-2024.appspot.com",
  messagingSenderId: "61893075484",
  appId: "1:61893075484:web:4a1f7732105feb33ccf5d9",
  measurementId: "G-WF45VT65WL"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


export { app, db, auth };