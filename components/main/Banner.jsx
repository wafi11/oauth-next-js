"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Banner = ({ item }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const router = useRouter();
  return (
    <div
      className="flex overflow-hidden w-full scroll-smooth relative mt-10"
      ref={emblaRef}>
      <div className="flex">
        {item?.map((item) => {
          return (
            <div className="embla__slide h-[500px] relative" key={item.mal_id}>
              {/* the image */}
              <img
                className="w-full md:h-full
                object-cover brightness-[0.5]
                rounded-md border-neutral-400
                dark:border-teal-400"
                src={item.images.jpg.image_url}
                alt="../"
              />
              <div className="absolute top-[50%] md:top-[30%]  ml-4 md:ml-16">
                <p
                  className="text-white text-xl md:text-xl h-full w-[60%] sm:w-[60%]  
                lg:text-6xl font-bold drop-shadow-xl">
                  {item.title}
                </p>
                <p
                  className="text-[8px] text-white md:text-lg mt-3 md:mt-8 w-[80%] 
                md:w-[70%] lg:w-[60%] drop-shadow-xl">
                  {item.duration}
                </p>
                <p
                  className="text-[8px] text-white md:text-lg w-[80%] 
                md:w-[70%] lg:w-[60%] drop-shadow-xl">
                  {item.rating}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
                  <button
                    onClick={() => router.push(`/anime/${item.mal_id}`)}
                    className="bg-white text-white bg-opacity-30 rounded-md py-1 mdLpy-2 px-2 md:px-4 
                  w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
                    <AiOutlineInfoCircle className="mr-1" />
                    More Info
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
