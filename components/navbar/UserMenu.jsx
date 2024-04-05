"use client";
import React, { useCallback, useState } from "react";
import ThemeButton from "./ThemeButton";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";
import { useNavbar } from "../hooks/useNavbar";

const UserMenu = ({ currentUser }) => {
  const { OnOpen, isOpen } = useNavbar();
  const router = useRouter();

  const handleOpen = () => {
    OnOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block py-3 px-4
          transition cursor-pointer rounded-full">
          <ThemeButton />
        </div>
        <div
          onClick={handleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-gray-200 dark:border-dark dark:bg-dark 
          flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu className="dark:text-teal-500" onClick={handleOpen} />
          <div className="hidden md:block">
            <Avatar currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
