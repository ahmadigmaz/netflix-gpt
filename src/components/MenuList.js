import React, { useState } from "react";
import { ChevronDown, LogOut, HelpCircle, User, Users } from "lucide-react";
import { USER_AVATAR } from "../Utils/constants";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

const MenuList = () => {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const logOuthandler = () => {
    signOut(auth).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <>
      {user && (
        <div className="relative group ml-2 sm:ml-4">
          {/* Avatar + Dropdown Arrow */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={USER_AVATAR}
              alt="user-avatar"
              className="w-8 h-8 rounded"
            />
            <ChevronDown className="text-white w-4 h-4" />
          </div>

          {/* Dropdown */}
          {isOpen && <div
            className={`absolute right-0 mt-2 w-40 sm:w-56 bg-black text-white rounded-md shadow-lg border border-gray-700 transition-all duration-200 transform
              ${
                isOpen || true /* ensure hover works */
                  ? "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                  : ""
              }
              ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}
            `}
          >
            <ul className="py-2 text-sm sm:text-base">
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
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </div>
          </div>}
        </div>
      )}
    </>
  );
};

export default MenuList;
