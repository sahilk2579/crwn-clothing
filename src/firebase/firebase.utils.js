import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCGSKQTaxbPK_l6B96iwlijoLg81gfSOP4",
    authDomain: "crown-clothing-38edf.firebaseapp.com",
    databaseURL: "https://crown-clothing-38edf.firebaseio.com",
    projectId: "crown-clothing-38edf",
    storageBucket: "crown-clothing-38edf.appspot.com",
    messagingSenderId: "243999542842",
    appId: "1:243999542842:web:8b3f358b4032be506d2f03",
    measurementId: "G-2S3F3M0G8X"
  };


export const createUserProfileDocument = async (userAuth , additionalData) =>{

  if(!userAuth){
    return;
  }
  else{

    const useRefer  = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await useRefer.get();

    //userAuth.uid = uid recived from google sign in
    //console.log(userAuth)


    //checking if GUID exists in firestore db
    if(!snapshot.exists)
    {

      console.log('user does exists in DB')
      const {displayName , email } = userAuth;
      
      const createdAt = new  Date();

      try{
          await useRefer.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }
      catch(error)
      {
        console.log('errror' , error.message)
      }
      
    }
    else
  
    {
    // console.log('user does exists in DB')
    }
    
    return useRefer;
  }
  



} 




firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;
