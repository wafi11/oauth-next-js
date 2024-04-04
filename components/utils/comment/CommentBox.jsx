"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CommentBox = ({
  anime_mal_id,
  email,
  anime_title,
  anime_image,
  username,
}) => {
  const [comment, setComment] = useState("");
  // const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = {
      anime_mal_id,
      email,
      comment,
      username,
      anime_title,
      anime_image,
    };

    const response = await axios
      .post("/api/comment", data)
      .then(() => {
        setComment("");
        toast.success("Posted");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went Wrong");
      });
    return response;
  };

  return (
    <div className="mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-white dark:text-purple-500">
          Discussions
        </h2>
      </div>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-white dark:bg-gray-200">
        <label
          htmlFor="Write Anything "
          className="text-[#233250] text-lg font-semibold">
          Your Comment
        </label>
        <textarea
          onChange={handleInput}
          value={comment}
          cols="30"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:right-0 focus:outline-none
             placeholder:text-gray-400 bg-gray-200"
          placeholder="Write a comment...."></textarea>
      </div>
      <button
        type="submit"
        onClick={handlePosting}
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-neutral-300 bg-purple-500 rounded-lg focus:ring-4 focus:ring-green-200 
        dark:focus:ring-green-800 hover:bg-grren-800">
        Post Comment
      </button>
    </div>
  );
};

export default CommentBox;
