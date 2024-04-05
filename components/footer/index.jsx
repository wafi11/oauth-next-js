import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaFacebook, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SearchFooter from "./Search";
import Paticians from "./Paticians";

const Footer = () => {
  return (
    <div className="w-full absolute bg-gray-800 mx-auto py-10 px-10 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-teal-500">NEXTNIME</h1>
        <p className="py-4 text-lg">
          NextNime Web for streaming movie and watching anime.
        </p>
        <div className="text-3xl flex md:w-[75%] my-6 justify-between">
          <FaFacebook className="hover:text-blue-800" />
          <FaInstagramSquare className="hover:bg-gradient-to-r from-blue-700 to-purple-500" />
          <FaGithubSquare className="hover:bg-slate-950 hover:text-gray-200" />
          <FaXTwitter className="hover:bg-slate-950 hover:text-gray-200" />
        </div>
      </div>
      <Paticians />
      <SearchFooter />
    </div>
  );
};

export default Footer;
