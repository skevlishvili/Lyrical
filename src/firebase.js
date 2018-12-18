import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBpIX4dkTtvd-XQd-p_o_f3-8ndbmZlpu4",
  authDomain: "lyrical-a0387.firebaseapp.com",
  databaseURL: "https://lyrical-a0387.firebaseio.com",
  projectId: "lyrical-a0387",
  storageBucket: "lyrical-a0387.appspot.com",
  messagingSenderId: "474207322002"
};

const app = firebase.initializeApp(config);

export { app };
