import React from "react";

const Paticians = () => {
  return (
    <div className="grid grid-cols-3 justify-between mt-6 cursor-pointer ">
      <div className="">
        <h6 className="font-medium text-teal-400 ">Genres</h6>
        <ul>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20">Action</li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Adventure
          </li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Romance
          </li>
        </ul>
      </div>
      <div className="">
        <h6 className="font-medium text-teal-400">General</h6>
        <ul>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Privacy
          </li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Dashboard
          </li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Register
          </li>
        </ul>
      </div>
      <div className="">
        <h6 className="font-medium text-teal-400">Pages</h6>
        <ul>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Popular
          </li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Tranding
          </li>
          <li className="py-2 teaxt-sm hover:text-teal-500 z-20 transition">
            Top
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paticians;
