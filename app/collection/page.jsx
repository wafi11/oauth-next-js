import React from "react";
import MovieCard from "../../components/main/MovieCard";
import { DataCollection } from "../libs/DataCollection";
import MovieList from "../../components/main/movieList";
import Link from "next/link";

const page = async () => {
  const data = await DataCollection();
  console.log({ jancok: data });
  return (
    <div className="px-4 md:px-12 pt-24 py-20 space-y-8">
      <div className="">
        <h4 className="dark:text-white text-black  text-md md:text-2xl lg:text-3xl font-semibold mb-4">
          My Collections
        </h4>
        <div className="grid grid-cols-4 gap-4 rounded-xl">
          {data?.map((movie) => (
            <Link
              href={`/anime/${movie.anime_mal_id}`}
              key={movie.anime_mal_id}>
              <MovieCard title={movie.anime_title} image={movie.anime_image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
