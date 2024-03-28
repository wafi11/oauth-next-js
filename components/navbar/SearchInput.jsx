"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useCallback, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { createurl } from "../utils/search";
import { title } from "process";

const SearchInput = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const searchRef = useRef();
  const query = params.get("query") ?? "";

  // const urlAnime = new URLSearchParams(params.toString());
  // urlAnime.set("query", searchRef.current);
  // const queryParamss = createurl(pathname, urlAnime);
  // const paramss = new URLSearchParams(params.toString());
  // console.log(paramss);
  // paramss.set("search", searchRef.current.value);
  // router.push(`${params}`);

  const handleClick = useCallback(() => {
    let currentQuery;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      genre: label,
    };

    if (params?.get("genre") === label) {
      delete updatedQuery.genre;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);
  return (
    <div
      className={`justify-center items-center border-[1px] 
    sm:w-[400px] py-2 rounded-full shadow-sm hover:shadow-md  bg-white
   cursor-pointer relative dark:bg-dark dark:border-dark
   `}>
      <div className="flex justify-between items-center px-5 p-1 ">
        <input
          placeholder="Search For anything "
          className={`focus:outline-none text-gray-700 bg-white dark:text-teal-500 dark:bg-dark w-full rounded-full
            `}
        />
        <div
          onClick={() => {}}
          className="text-xl md:text-2xl p-2  dark:bg-teal-500 
            text-gray-700 rounded-full absolute right-2">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
