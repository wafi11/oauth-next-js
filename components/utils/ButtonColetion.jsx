"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ButtonColetion = ({ anime_mal_id, email, anime_title, anime_image }) => {
  const [iseLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const buttonColec = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = { anime_mal_id, email, anime_title, anime_image };

    const response = await axios
      .post("/api/colection", data)
      .then(() => {
        toast.success("Anime Added");
        router.refresh();
      })
      .catch(() => {
        toast.error("Can't added");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="p-2 justify-center items-center text-center">
      <button
        onClick={buttonColec}
        className="bg-[#233250] text-gray-300 p-2 rounded-md">
        Add To Collection
      </button>
    </div>
  );
};

export default ButtonColetion;
