import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";

const MovieList = ({ item, title }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="dark:text-white text-black  text-md md:text-2xl lg:text-3xl font-semibold py-5">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-4 rounded-xl">
          {item?.map((movie) => (
            <Link href={`/anime/${movie.mal_id}`} key={movie.mal_id}>
              <MovieCard
                title={movie.title}
                image={movie.images.webp.image_url}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
