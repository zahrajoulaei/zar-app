import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../lib/firebase.config"

const provider = new GoogleAuthProvider()

const FirebaseAuth = {
    singIn: ()=> {
        return new Promise (resolve=> {
            signInWithPopup(auth, provider)
            .then(response => {
                resolve(response.user)
            })
        .catch(console.error)
    })
    },
    signOut: ()=> {
        signOut(auth)
        .then( ()=> console.log('user logged out'))
        .catch(console.error)
    }
    
}
export default FirebaseAuth