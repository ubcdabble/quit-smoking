import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "./firebaseConfig.js"


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });