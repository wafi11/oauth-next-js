"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronDownIcon, PlayIcon } from "lucide-react";
import React from "react";
import { MdFavorite } from "react-icons/md";

const MovieCard = ({ title, image }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <div className=" group bg-zinc-900 col-span relative h-[20vw] sm:h-[25vw] md:h-[30vw] overflow-hidden rounded-md">
        <img
          className="cursor-pointer bg-cover transition duration shadow-xl
        group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
          src={image}
          alt="../"
        />
        <div
          className="opacity-0 absolute top-0 transition duration-200 z-10 inivisible sm:visible 
        delay-300 w-full scale-0 group-hover:scale-150 group-hover:-translaate-y-[6vw]
        group-hover:-translate-y-[2vw] group-hover:opacity-100 ">
          <img
            src={image}
            alt="../"
            className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[20vw] sm:h-[25vw] md:h-[30vw]"
          />
        </div>
      </div>
      <h3 className="text-sm sm:text-sm md:text-lg xl:text-2xl font-medium text-center pt-2 sm:pt-5  dark:text-teal-500">
        {title}
      </h3>
    </>
  );
};

export default MovieCard;
