import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <Link href={"/"}>
      <div
        className="text-2xl sm:text-2xl md:text-3xl 
      lg:text-4xl dark:text-teal-500 text-black/70 font-extrabold uppercase cursor-pointer">
        NextNime
      </div>
    </Link>
  );
};

export default Brand;
