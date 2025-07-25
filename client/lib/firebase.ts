import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYb9VHMeI1_ea3VL4ok1aCaCEegGQAIEA",
  authDomain: "indiago-55f18.firebaseapp.com",
  projectId: "indiago-55f18",
  storageBucket: "indiago-55f18.firebasestorage.app",
  messagingSenderId: "1017209891641",
  appId: "1:1017209891641:web:fc1ee10dcdb729070b16e8",
  measurementId: "G-EFC9X9SQMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
