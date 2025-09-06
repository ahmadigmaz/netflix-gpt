import Header from './Header'
import { BACKGROUND_IMAGE } from '../Utils/constants'
import { checkValidData } from '../Utils/validate'
import { MdOutlineCancel } from "react-icons/md"; 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth"
import { auth } from "../Utils/firebase"
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null); 
    const dispatch = useDispatch()

    const HandlerButtonClicked = () => {
       const message = checkValidData(email.current.value, password.current.value);
       setErrorMsg(message);
       if(message) return;

        //sign up logic
       if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(name.current.value);
                //update profile
                updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser
                    dispatch(addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    }))
                })
                .catch((error) => {
                    setErrorMsg(error);
                })
            })
            .catch((error) => {
              //  const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
            });
       }
        //sign in logic
       else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            const {uid, email, displayName, photoURL} = auth.currentUser
            dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
            }))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage)
            console.log(errorCode + "-" + errorMessage)
        });
       }
    }

    const HandlerSignUpForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className="relative w-full h-screen">
        {/* Background image */}
        <img 
            src={BACKGROUND_IMAGE}
            alt="background-img"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>


        {/* Form container */}
        <div className="absolute inset-0 flex items-center justify-center">
            <form 
            onSubmit={(e) => e.preventDefault()} 
            className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 sm:p-12 bg-black/80 text-white rounded-lg"
            >
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
                <input 
                className="p-4 my-4 w-full bg-gray-600/50 rounded-md"
                type="text" 
                placeholder="Full Name"
                ref={name}
                />
            )}

            <input 
                ref={email}
                className="p-4 my-4 w-full bg-gray-600/50 rounded-md"
                type="text" 
                placeholder="Email or Phone Number"
            />
            <input 
                ref={password}
                className="p-4 my-4 w-full bg-gray-600/50 rounded-md" 
                type="password" 
                placeholder="Password"
            />

            {errorMsg && (
                <p className="text-red-600 flex items-center gap-2">
                <MdOutlineCancel className="text-red-600 text-xl " />
                {errorMsg}
                </p>
            )}

            <button 
                onClick={() => HandlerButtonClicked(email, password)} 
                className="bg-red-700 p-4 my-6 w-full rounded-lg font-bold"
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p 
                onClick={HandlerSignUpForm} 
                className="font-bold text-xl text-gray-400 cursor-pointer"
            >
                {isSignInForm ? "New to Netflix? Sign up now." : "Already a User? Sign in now"}
            </p>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Login