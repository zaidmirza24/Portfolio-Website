import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/zaidmirza24/"><FaLinkedinIn size={24} /></a>
              <a href="www.instagram.com/zaidmirza_"><FaInstagram size={24} /></a>
              <FaTwitter size={24} />
              <FaFacebook size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">By Zaid Mirza</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
