import Image from "next/image";
import React from "react";
import { FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="relative bg-[#141614] text-white text-center pt-16">
       <Image src="/wolf-5.png" alt="wolf" width={712} height={1138} className="hidden md:block absolute bottom-10 w-[23vw]"/>
       <Image src="/wolf-6.png" alt="wolf" width={712} height={1138} className="hidden md:block absolute right-0 bottom-10 w-[23vw]"/>
      {/* Big KYNZO Text */}
      {/* <h1 className="gradient-2 !leading-[80%] text-transparent bg-clip-text text-[40vw] md:text-[35vw] noodle text-stroke">
        KYNZO
      </h1> */}
      <div className="w-[80%] md:w-[65%] mx-auto">
        <Image src="/footer-title.png" alt="title" width={1827} height={790} />
      </div>
      {/* Social Icons */}
      <div className="relative z-5 flex justify-center space-x-2 mb-6 -md:mt-14">
        <a
          href="https://t.me/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#229ED9] p-6 rounded-full hover:scale-110 transition"
        >
          <FaTelegramPlane className="text-white text-2xl" />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-full hover:scale-110 transition"
        >
          <FaYoutube className="text-black text-2xl" />
        </a>
        <a
          href="https://x.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1DA1F2] p-5 rounded-full hover:scale-110 transition"
        >
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M20.95 3H17.7l-4.19 5.24L8.63 3H3.05l6.72 9.3L3 21h3.27l4.58-5.74L15.86 21h5.6l-7.1-9.84L20.95 3zm-3.39 1.5l-3.65 4.57 1.54 2.1L19.8 4.5h-2.24zM5.13 4.5h2.3l9.45 13H14.5L5.13 4.5z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="bg-black text-xs urbanist text-white border-t border-gray-800 p-8">
        COPYRIGHT © 2025 KYNZO LIMITED. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default FooterSection;
