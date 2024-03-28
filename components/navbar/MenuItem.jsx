import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { Children } from "react";
import { useCallback } from "react";

const MenuItem = ({ Children }) => {
  const router = useRouter();
  const dataItem = [
    {
      label: "SignOut",
      ada: true,
    },
  ];

  return (
    <>
      {dataItem.map((item, index) => {
        <div
          key={index}
          className="px-4 py-3 dark:hover:bg-teal-100  transition font-semibold">
          <div onClick={() => signOut()}>{item.label}</div>
        </div>;
      })}
    </>
  );
};

export default MenuItem;
