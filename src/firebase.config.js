import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCrfAazE-MtcRJt7y8tYg0H5ULqEXiCTD8",
  authDomain: "touristweb-40134.firebaseapp.com",
  projectId: "touristweb-40134",
  storageBucket: "touristweb-40134.appspot.com",
  messagingSenderId: "183452775692",
  appId: "1:183452775692:web:743f7fb647281dc744c529"
};
// Initialize Firebase
const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;