import { useState, useEffect } from "react";
import { NETFLIX_LOGO, USER_AVATAR } from "../Utils/constants";
import { ChevronDown, LogOut, HelpCircle, User, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import useTvShows from "../hooks/useTvShows";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useTvShows();

const logOuthandler = () => {
  signOut(auth)
  .then(() => {
  })
  .catch((error) => {
    console.error("Error signing out:", error);
  });
};

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

  // stop propagation so clicking inside doesn't immediately close
  const stop = (e) => e.stopPropagation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-4 sm:px-8 md:px-16 py-2 flex justify-between items-center">

     <div className="flex">
      <img
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        className="w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 object-contain"
      />
      {user && <ul className="flex flex-wrap md:flex-row text-white font-medium text-sm sm:text-base mt-3 mx-1">
        <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Home</li>
        <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">TV Shows</li>
        <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Movies</li>
        <li className="m-1 sm:m-2 hover:text-gray-300 cursor-pointer">Games</li>
      </ul>}
    </div>


      {user && (
        // NOTE: "group" enables group-hover, and we're also using isOpen state for clicks
        <div className="relative group" onClick={stop}>
          <div
            className="flex items-center gap-1 cursor-pointer"
          >
            <img src={USER_AVATAR} alt="user-avatar" className="w-8 h-8 rounded" />
            <ChevronDown className="text-white w-4 h-4" />
          </div>

          <div
            className={
              "absolute right-0 mt-2 w-56 bg-black text-white rounded-md shadow-lg border border-gray-700 transition-all duration-150 transform " +
              (isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible")
            }
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <Users className="w-4 h-4" /> Manage Profiles
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <User className="w-4 h-4" /> Transfer Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <User className="w-4 h-4" /> Account
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
                <HelpCircle className="w-4 h-4" /> Help Centre
              </li>
            </ul>
            <div className="border-t border-gray-700">
              <button
                onClick={logOuthandler}
                className="w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Sign out of Netflix
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
