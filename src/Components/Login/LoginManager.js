import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firbase.config';

export const iniTiaLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
//providers
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();


//google signIn handler 
export const signInGoogleHandler = () => {

    return firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            let credential = res.credential;
            const token = credential.accessToken;
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSigned: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            return signedInUser
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });
}


//google signOut handler   
export const signOutHandler = () => {

    return firebase.auth().signOut()
        .then(() => {
            const signedOutUser = {
                isSigned: false,

            }
            return signedOutUser;
        }).catch((error) => {
            // An error happened.
        });
}


//Facebook handler
export const handleFbSignIN = () => {
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            var credential = result.credential;

            // The signed-in user info
            const fbUser = result.user;
            return fbUser;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            return error.message;

            // ...
        });
}


//Email and password handler
export const createUserWithEmailAndPassword = (name,email,password) => {
  
   return  firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((res) => {
            // Signed in 

            const submitMessage = res.user; 
            submitMessage.error = <p style={{ color: 'green' }}>You are successfully signed up </p>;
            updateUserName(name);
            return submitMessage;
            

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            const submitMessage = {};
            submitMessage.error = <p style={{ color: 'red' }}>{errorMessage}</p>;
            return submitMessage;


            // ..
        });
}


export const signInWithEmailAndPassword = (email,password) => {
    
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in

            const submitMessage = { ...res.user };
            submitMessage.error = <p style={{ color: 'green' }}>You are successfully logged in </p>;
            return submitMessage;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            const submitMessage = {};
            submitMessage.error = <p style={{ color: 'red' }}>{errorMessage}</p>;
            return submitMessage;
        });

}


//update user Info 
const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log("user updated successfully")
    }).catch(function (error) {
        console.log(error)
    });

}




