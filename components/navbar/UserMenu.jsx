"use client";
import React, { useCallback, useState } from "react";
import ThemeButton from "./ThemeButton";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";

const UserMenu = ({ currentUser }) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleOpen = useCallback(() => {
    setNav((value) => !value);
  }, []);

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
          flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md ">
          <AiOutlineMenu className="dark:text-teal-500" />
          <div className="hidden md:block">
            <Avatar currentUser={currentUser} />
          </div>
        </div>
      </div>
      {nav && (
        <div
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden 
            right-0 top-12 test-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <div className="px-4 py-3  transition font-semibold">
                <p
                  className="dark:hover:text-teal-100 hover:text-green-300"
                  onClick={() => router.push("/login")}>
                  My Comments
                </p>
                <p
                  className="dark:hover:text-teal-100 hover:text-green-300"
                  onClick={() => signOut()}>
                  Logout
                </p>
              </div>
            ) : (
              <>
                <div className="px-4 py-3 dark:hover:text-teal-100  transition font-semibold">
                  <p className="" onClick={() => router.push("/login")}>
                    Login
                  </p>
                  <p onClick={() => router.push("/register")}>Sign Up</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
