"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillGithub, AiFillGoogleSquare } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form";

const RegisterStyle = ({ Submit, erors, required, register }) => {
  return (
    <div className="w-screen h-screen justify-center items-center bg-[#233250]">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:2-2/5 mx-auto ">
        <div className="flex flex-col pt-10 justify-center items-center gap-4">
          <h2 className="font-bold text-3xl text-white text-center pt-5">
            Registration Form
          </h2>
          <p className="text-xl font-light text-white">For Streaming Movie</p>
        </div>
        <div className="flex w-screen px-2 sm:w-full h-[400px] mt-5 rounded-lg justify-center items-center bg-[#424769] gap-8 ">
          <Image
            src="/bg1.jfif"
            width={100}
            height={100}
            alt="../"
            className="bg-cover h-full w-1/2 "
          />
          <div className="flex flex-col gap-3 w-auto overflow-x-hidden pt-2">
            <div className="grid gap-2">
              <h4 className="text-white font-medium text-xl w-3/4">
                Make your Account for
                <span> access movie</span>
              </h4>
            </div>
            <input
              type="text"
              id="username"
              {...register("username", { required })}
              className="p-2 rounded bg-[#676f9d] focus:outline-none focus:bg-[#676f9d] text-teal-300"
              placeholder="Username"
            />
            <input
              type="text"
              id="email"
              {...register("email", { required })}
              className="p-2 rounded bg-[#676f9d] focus:outline-none focus:bg-[#676f9d] text-teal-300"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              {...register("password", { required })}
              className="p-2 rounded bg-[#676f9d] focus:outline-none focus:bg-[#676f9d] text-teal-300"
              placeholder="Password"
            />
            <p className="text-teal-500">
              Do you have account ?
              <span className="text-white underline cursor-pointer">Login</span>
            </p>
            <button className="bg-teal-500 rounded p-2" onClick={Submit}>
              Submit
            </button>
            <div className="flex gap-8 justify-center items-center text-center pb-2">
              <div
                className="flex justify-center items-center text-md p-2 font-bold gap-3
               bg-[#676f9d] text-gray-800 w-full">
                <AiFillGithub size={20} />
                Github
              </div>
              <div
                className="flex justify-center items-center text-md p-2 font-bold gap-3
               bg-[#676f9d] text-rose-700 w-full">
                <AiFillGoogleSquare size={20} /> Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStyle;
