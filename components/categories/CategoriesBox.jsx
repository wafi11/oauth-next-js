"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import qs from "query-string";

const CategoriesBox = ({ genre, label, token }) => {
  const router = useRouter();
  const params = useSearchParams();

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
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 
        hover:text-neutral-800 transition cursor-pointer
        ${token ? "border-b-neutral-800" : "border-transparent"}
        ${token ? "text-b-neutral-800" : "text-neutral-500"}`}>
      <div className="font-medium text-medium">{label}</div>
    </div>
  );
};

export default CategoriesBox;
