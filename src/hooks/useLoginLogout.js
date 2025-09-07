import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "../Utils/firebase"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from "../Utils/userSlice"

const useLoginLogout = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email, displayName, photoURL} = user
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
    }))
    navigate("/browse");
    }
    else {
    dispatch(removeUser());
    navigate("/")
    }
  })

  //unsubscribe the onAuthStateChange api once useeffect do his work
  return () => unsubscribe();
},[])

}

export default useLoginLogout;