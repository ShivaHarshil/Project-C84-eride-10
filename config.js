import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx2VzYBcGGgeN7gZhAoqO_g71-6AqCiQ0",
  authDomain: "project-c78.firebaseapp.com",
  projectId: "project-c78",
  storageBucket: "project-c78.appspot.com",
  messagingSenderId: "881580622570",
  appId: "1:881580622570:web:b36f14d8bd3950d9fa8d93"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
