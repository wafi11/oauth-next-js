"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchFooter = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    router.push(`/search?q=${input}`);
  };
  return (
    <div className="w-30 h-10 justify-center items-center my-5 relative">
      <div className="text-2xl font-light m-2">Find Your Anime!</div>
      <div className="flex flex-row justify-between items-center w-full h-full relative rounded-lg">
        <input
          defaultValue={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search For anything "
          className={`focus:outline-none p-2
       text-gray-700 bg-neutral-200 dark:text-teal-500 dark:bg-dark 
       w-full h-full
      `}
        />
        <div
          onClick={handleClick}
          className="text-xl md:text-2xl p-2  dark:bg-teal-500 
      text-gray-700 rounded-full absolute right-2">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchFooter;
