import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTo8tEOCAoxI_8Oh4SAAYpc8V1HmqMCpo",
  authDomain: "portfolio-1fe90.firebaseapp.com",
  projectId: "portfolio-1fe90",
  storageBucket: "portfolio-1fe90.appspot.com",
  messagingSenderId: "508828535554",
  appId: "1:508828535554:web:ad47d2fe417783447a901b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const projectsCollection = collection(db, 'Projects')

export { projectsCollection }

