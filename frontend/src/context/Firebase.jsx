import { createContext,useContext,useState,useEffect } from "react";
import {initializeApp} from 'firebase/app'
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";



const FirebaseContext = createContext(null);





const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};



export const useFirebase = ()=> useContext(FirebaseContext);

const firebaseApp=initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const firebaseAuth=getAuth(firebaseApp);

export const FirebaseProvider=(props) =>{


    
  const [user, setUser] = useState(null);
 

  useEffect(() => {
  

        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
             
              setUser(user);

            
            } else {
             
              setUser(null);
            }
          });

    
    
  }, []);

  

    const signUpuser=(email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth, email,password)
    .then((userCredential) => {
      // Signed up 
     // const user = userCredential.user;
    
    })
}

  const Loginuser=(email,password)=>{
    signInWithEmailAndPassword(firebaseAuth, email, password)
  .then(() => {
   
  })
  .catch((error) => {
   //const errorCode = error.code;
    //const errorMessage = error.message;
  });
  }

 

  const Logout=()=>{
   
    signOut(firebaseAuth).then(() => {
        // Sign-out successful.
        setUser(null);
       
        console.log(user);
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });

  }

  const addDocu=async (name,gender,age,phone_number,profession)=>{

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        gender: gender,
        age: age,
        phone_number : phone_number,
        profession :  profession
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const isLoggedIn =  user ? true : false;
  console.log(user);
  console.log(isLoggedIn);



    return<FirebaseContext.Provider value={{signUpuser,Loginuser,onAuthStateChanged,isLoggedIn,addDocu,Logout}}
    >{props.children}</FirebaseContext.Provider>
}