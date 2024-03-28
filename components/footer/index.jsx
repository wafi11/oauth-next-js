import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaFacebook, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-teal-500">NEXTNIME</h1>
        <p className="py-4 text-lg">
          NextNime Web for streaming movie and watching anime.
        </p>
        <div className="text-3xl flex md:w-[75%] my-6 justify-between">
          <FaFacebook />
          <FaInstagramSquare />
          <FaGithubSquare />
          <FaXTwitter />
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between mt-6">
        <div className="">
          <h6 className="font-medium text-teal-400">Genres</h6>
          <ul>
            <li className="py-2 teaxt-sm">Action</li>
            <li className="py-2 teaxt-sm">Adventure</li>
            <li className="py-2 teaxt-sm">Romance</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-teal-400">General</h6>
          <ul>
            <li className="py-2 teaxt-sm">Privacy</li>
            <li className="py-2 teaxt-sm">Dashboard</li>
            <li className="py-2 teaxt-sm">Register</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-teal-400">Pages</h6>
          <ul>
            <li className="py-2 teaxt-sm">Popular</li>
            <li className="py-2 teaxt-sm">Tranding</li>
            <li className="py-2 teaxt-sm">Top</li>
          </ul>
        </div>
      </div>
      <div className="w-30 h-10 justify-center items-center mt-5 ">
        <div className="text-2xl font-light m-2">Find Your Anime!</div>
        <div className="flex flex-row justify-between items-center w-full h-full relative rounded-lg">
          <input
            placeholder="Search For anything "
            className={`focus:outline-none p-2
             text-gray-700 bg-neutral-200 dark:text-teal-500 dark:bg-dark 
             w-full h-full
            `}
          />
          <div
            className="text-xl md:text-2xl p-2  dark:bg-teal-500 
            text-gray-700 rounded-full absolute right-2">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
