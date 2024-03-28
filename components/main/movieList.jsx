import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ item, title }) => {
  if (isEmpty(item)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="dark:text-white text-black  text-md md:text-2xl lg:text-3xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-4 ">
          {item.data?.map((movie) => (
            <MovieCard
              key={movie.mal_id}
              title={movie.title}
              image={movie.images.webp.large_image_url}
              genre={movie.rating}
              duration={movie.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
