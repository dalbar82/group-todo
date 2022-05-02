
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAO1K7ImZHr0-Z96rftURUtHHdztR6IMzo",
  authDomain: "turnout-76f62.firebaseapp.com",
  projectId: "turnout-76f62",
  storageBucket: "turnout-76f62.appspot.com",
  messagingSenderId: "543203621611",
  appId: "1:543203621611:web:10f24509074ae0faaa9cae",
  measurementId: "G-Z17EPK8D4Z",
  databaseURL: "https://turnout-76f62-default-rtdb.asia-southeast1.firebasedatabase.app"
};



export const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export const eventsRef = ref(database, 'events');