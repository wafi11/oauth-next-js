"use client";
import React, { useEffect } from "react";
import { ApiJikan } from "../api/jikan-api";
import MovieList from "../../components/main/movieList";
import { useSearchParams } from "next/navigation";
import { useSearch } from "../../components/hooks/useSearchInput";
import Banner from "../../components/main/Banner";

const page = () => {
  const urlMovie = useSearchParams();
  const { fetchMovie, movie } = useSearch();
  const url = urlMovie.get("query") ?? "";
  useEffect(() => {
    fetchMovie(`q=${url}`);
  }, [url]);
  const data = movie.data;
  return (
    <>
      <Banner item={data} />
      <div className="pb-40">
        <MovieList item={data} title="Trending Now" />
        <MovieList item={data} title="Popular" />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default page;
