import React from "react";
import { authUserSession } from "../libs/auth/route";
import Image from "next/image";
import Link from "next/link";

const Dashboard = async () => {
  const currentUser = await authUserSession();
  console.log(currentUser);
  return (
    <div className="w-full pt-24 h-screen justify-center items-center bg-[#233250]">
      <div className="flex flex-col justify-center items-center gap-4 h-full w-full">
        <h2 className="font-bold text-3xl text-white text-center ">
          Dashboard
        </h2>
        <div className="sm:grid grid-cols-2 gap-10 pt-10">
          <Image
            src={currentUser?.user?.image}
            width={250}
            height={200}
            className=" rounded-full"
          />
          <div className="grid gap-3  text-gray-200  col-span-1">
            <h2 className="text-xl text-slate-300">
              Username : {currentUser?.user?.name}
            </h2>
            <h2 className="text-xl text-slate-300">
              Email : {currentUser?.user?.email}
            </h2>
            <div className="flex flex-row gap-8 dark:text-gray-300 text-teal-700 justify-center items-center">
              <Link
                href={"/collection"}
                className=" dark:bg-teal-700 bg-gray-300 font-semibold  text-md rounded-md p-3">
                My Collection
              </Link>
              <Link
                href={"/collection"}
                className=" dark:bg-teal-700 bg-gray-300 font-semibold  text-md rounded-md p-3">
                My Comment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
