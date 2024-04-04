import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchFooter = () => {
  return (
    <div className="w-30 h-10 justify-center items-center my-5 relative">
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
  );
};

export default SearchFooter;
