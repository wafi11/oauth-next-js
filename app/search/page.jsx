// "use client";
import React from "react";
import SearchClient from "./SearchClient";
import { cookies } from "next/headers";

export function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

const Search = async () => {
  const cookieData = await getCookieData();
  return <SearchClient />;
};
export default Search;
