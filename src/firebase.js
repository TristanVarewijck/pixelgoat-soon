import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiNsNz-5-L7fHkTyLG-cSBZ_wYcpHHqKA",
  authDomain: "pixelgoat-soon.firebaseapp.com",
  projectId: "pixelgoat-soon",
  storageBucket: "pixelgoat-soon.appspot.com",
  messagingSenderId: "8182791790",
  appId: "1:8182791790:web:e06c6b97f9df0783eb707f",
  measurementId: "G-VG9F3K3DV9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
