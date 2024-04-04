import React from "react";
import { authUserSession } from "../libs/auth/route";
import { DataComments } from "../libs/DataComments";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  const comments = await DataComments();
  return (
    <section className="pt-24 px-4 w-full">
      <h1></h1>
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-blue-300 text-color-dark p-4">
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
