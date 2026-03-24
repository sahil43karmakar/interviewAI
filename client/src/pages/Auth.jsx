import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
function Auth({isModel = false}) {
    const dispatch = useDispatch()

    const handleGoogleAuth = async () => {
  try {
    // Clear any pending auth events first
    await auth.signOut().catch(() => {});
    
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const name = user.displayName;
    const email = user.email;
    const uid = user.uid;

    console.log("Firebase auth successful for:", email);

    const response = await axios.post(
      ServerUrl + "/api/auth/google-auth",
      { name, email, uid },
      { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("Server auth successful");
    dispatch(setUserData(response.data));
    
    // Small delay before redirect
    setTimeout(() => {
      window.location.href = "/";
    }, 500);

  } catch (error) {
    console.error("Google auth error:", error.code, error.message);
    
    // Handle specific Firebase errors
    if (error.code === 'auth/popup-blocked') {
      alert('Popup was blocked by the browser. Please allow popups for this site.');
    } else if (error.code === 'auth/cancelled-popup-request') {
      console.log('User cancelled the popup');
    } else if (error.code === 'auth/network-request-failed') {
      alert('Network error. Please check your internet connection.');
    }
    
    dispatch(setUserData(null));
  }
};
  return (
    <div className={`
      w-full 
      ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
    `}>
        <motion.div 
        initial={{opacity:0 , y:-40}} 
        animate={{opacity:1 , y:0}} 
        transition={{duration:1.05}}
        className={`
        w-full 
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
        bg-white shadow-2xl border border-gray-200
      `}>
            <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-purple-800 text-white p-2 rounded-lg'>
                    <BsRobot size={18}/>

                </div>
                <h2 className='font-semibold text-lg'>PrepMate</h2>
            </div>

            <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview

                </span>
            </h1>

            <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews,
        track your progress, and unlock detailed performance insights.
            </p>


            <motion.button 
            onClick={handleGoogleAuth}
            whileHover={{opacity:0.9 , scale:1.03}}
            whileTap={{opacity:1 , scale:0.98}}
            className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md '>
                <FcGoogle size={20}/>
                Continue with Google

   
            </motion.button>
        </motion.div>

      
    </div>
  )
}

export default Auth
