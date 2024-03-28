import Image from "next/image";
import React from "react";

const Avatar = ({ currentUser }) => {
  return (
    <Image
      src={currentUser?.image || "/placeholder.jpg"}
      alt="../"
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};

export default Avatar;
