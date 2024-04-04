"use client";
// import { usePathname, useRouter, useSearchParams } from "next/navigation
import qs from "query-string";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { createurl } from "../utils/search";
import { title } from "process";
import { useSearch } from "../hooks/useSearchInput";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const { fetchMovie, movie } = useSearch();
  const searchRef = useRef();
  const router = useRouter();


  const handleClick = () => {
    const query = searchRef.current.value;
    router.push(`/search?query=${query}`);
  };
  return (
    <div
      className={`justify-center items-center border-[1px] 
    sm:w-[400px] py-2 rounded-full shadow-sm hover:shadow-md  bg-white
   cursor-pointer relative dark:bg-dark dark:border-dark
   `}>
      <div className="flex justify-between items-center px-5 p-1 ">
        <input
          ref={searchRef}
          placeholder="Search For anything "
          className={`focus:outline-none text-gray-700 bg-white dark:text-teal-500 dark:bg-dark w-full rounded-full
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

export default SearchInput;
