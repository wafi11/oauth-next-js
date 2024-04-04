import React from "react";
import { DataComments } from "../../../app/libs/DataComments";
import prisma from "../../../app/libs/prismaDb";
import toast from "react-hot-toast";
import DataCollection from "../../../app/libs/DataCollection";
import { authUserSession } from "../../../app/libs/auth/route";

const CommentInput = async ({ anime_mal_id }) => {
  const user = await authUserSession();
  const data = await DataComments(anime_mal_id);
  function time(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }
  return (
    <div className="flex flex-col text-white w-full py-5 gap-4 justify-center items-center">
      {data?.map((item, index) => {
        const timeCreated = time(item.createdAt);
        const timeUpdated = time(item.updatedAt);
        return (
          <>
            <div
              key={index}
              className="w-14 h-14 text-center rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
              <img
                className="h-12 w-12 rounded-full object-cove justify-center"
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt=""
              />
            </div>
            <div className="grid-grid-cols-4 justify-center items-center text-center">
              <div className="font-medium text-purple-500">{item.username}</div>
              <div className="text-neutral-400">
                {timeCreated.toLocaleTimeString()}
              </div>
              <div className="text-gray-600">
                {timeUpdated.toLocaleTimeString()}
              </div>
              <div className="mt-2 text-white w-50">{item.comment}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CommentInput;
