"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronDownIcon, PlayIcon } from "lucide-react";
import React from "react";
import { MdFavorite } from "react-icons/md";

const MovieCard = ({ title, image, genre, duration }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className=" group bg-zinc-900 col-span relative h-[20vw] overflow-hidden">
      <img
        className="cursor-pointer bg-cover transition duration shadow-xl
        rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
        src={image}
        alt="../"
      />
      <div
        className="opacity-0 absolute top-0 transition duration-200 z-10 inivisible sm:visible 
        delay-300 w-full scale-0 group-hover:scale-150 group-hover:-translaate-y-[6vw]
        group-hover:-translate-y-[2vw] group-hover:opacity-100">
        <img
          src={image}
          alt="../"
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[20vw]"
        />
      </div>
    </div>
  );
};

export default MovieCard;
