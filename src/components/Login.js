import Header from './Header'
import { BACKGROUND_IMAGE } from '../Utils/constants'
import { useState } from 'react'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const HandlerSignUpForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src = {BACKGROUND_IMAGE}
            alt='background-img'
            />
        </div>
        <form className=' w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm?
            <input 
            className='p-4 my-4 w-full bg-gray-600/50 rounded-md'
            type="text" 
            placeholder='Full Name' />:""
            }
            <input 
            className='p-4 my-4 w-full bg-gray-600/50 rounded-md'
            type="text" 
            placeholder='Email or Phone Number' />
            <input 
            className='p-4 my-4 w-full bg-gray-600/50 rounded-md' 
            type="password" 
            placeholder='Password' />
            <button className='bg-red-700 p-4 my-6 w-full rounded-lg font-bold'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p 
            onClick={HandlerSignUpForm} 
            className='font-bold text-xl text-gray-400 cursor-pointer'>
           {isSignInForm?"New to Netflix?Sign up now.":"Already a User?Sign in now"}
            </p>
        </form>
    </div>
  )
}

export default Login