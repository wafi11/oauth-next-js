"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Youtube from "react-youtube";

const VideoApi = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed right-2 top-20 pt-8">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1">
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <div className="p-2 justify-center items-center text-center">
        <button
          onClick={handleVideoPlayer}
          className="bg-[#233250] text-gray-300 p-2 rounded-md">
          Tonton Trailer
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoApi;
