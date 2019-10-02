import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhKsnX0HQwc_k80aVt4sfrpg16YpWZ3HE",
  authDomain: "my-project-9c5da.firebaseapp.com",
  databaseURL: "https://my-project-9c5da.firebaseio.com",
  projectId: "my-project-9c5da",
  storageBucket: "my-project-9c5da.appspot.com",
  messagingSenderId: "66242711751",
  appId: "1:66242711751:web:540ed92ec504418aad6ee2",
  measurementId: "G-Q6KVG4XY8Q"
};

class Database {
  constructor()
  {
    firebase.initializeApp(firebaseConfig);
  }

  createAccount(Account,add_success,add_fail)//add autoGenarate
  {
    firebase.firestore().collection("Account").add(Account).then(ref=>{add_success(ref.id)},add_fail);
  }

  createAccount2(Account)//add set doc
  {
    firebase.firestore().collection("Account").doc("Test").set(Account);
  }
}

const database = new Database();
export default database ;
