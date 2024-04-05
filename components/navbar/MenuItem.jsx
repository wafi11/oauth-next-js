"use client";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { Children } from "react";
import { useCallback } from "react";
import { useNavbar } from "../hooks/useNavbar";

const MenuItem = ({ currentUser }) => {
  const { isOpen } = useNavbar();
  const router = useRouter();
  const dataItem = [
    {
      label: "SignOut",
      ada: true,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed rounded-xl shadow-md w-35 h-20 dark:bg-teal-400 bg-white  overflow-hidden 
            right-4 top-12 test-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <div className="px-4 py-3  transition font-light">
                <p
                  className="dark:hover:text-teal-100 hover:text-green-300"
                  onClick={() => router.push("/dashboard")}>
                  My Profile
                </p>
                <p
                  className="dark:hover:text-teal-100 hover:text-green-300"
                  onClick={() => router.push("/collection")}>
                  My Collection
                </p>
                <p
                  className="dark:hover:text-teal-100 hover:text-green-300"
                  onClick={() => signOut()}>
                  Logout
                </p>
              </div>
            ) : (
              <div>
                <div className="flex flex-col p-4  transition font-semibold bg-neutral-100 dark:bg-slate-200">
                  <p
                    className="dark:hover:text-teal-400 hover:text-gray-900 text-gray-400 "
                    onClick={() => router.push("/login")}>
                    Login
                  </p>
                  <p
                    className="dark:hover:text-teal-400 hover:text-gray-900 text-gray-400"
                    onClick={() => router.push("/register")}>
                    Sign Up
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
