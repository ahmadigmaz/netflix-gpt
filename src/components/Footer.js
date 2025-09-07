import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10">
      {/* Social Icons */}
      <div className="flex space-x-6 mb-8">
        <a href="#" className="hover:text-gray-200">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 mb-8 text-sm">
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Audio Description
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Help Centre
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Media Centre
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © 2025-2025 NetflixGPT, Inc.
      </p>
    </footer>
  );
};

export default Footer;
