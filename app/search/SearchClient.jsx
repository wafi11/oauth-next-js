"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import MovieList from "../../components/main/movieList";

const SearchClient = () => {
  const params = useSearchParams();
  const [anime, setAnime] = useState([]);
  const url = params.get("q");
  console.log(url);
  useEffect(() => {
    const fetchAnime = async () => {
      const response = await axios(`/api/anime/search?q=${url}`);
      const result = await response.data;
      setAnime(result);
    };
    fetchAnime();
  }, [params]);
  return (
    <>
      <div className="pt-24 px-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold pt-10">
          Searching For ....
          <span className="text-slate-900 dark:text-teal-500">{url}</span>
        </h1>
      </div>
      <div className="pb-40">
        <MovieList item={anime} />
        <MovieList item={anime} />
      </div>
    </>
  );
};

export default SearchClient;
