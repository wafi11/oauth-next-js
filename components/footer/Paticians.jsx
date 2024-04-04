import React from "react";

const Paticians = () => {
  return (
    <div className="grid grid-cols-3 justify-between mt-6">
      <div className="">
        <h6 className="font-medium text-teal-400">Genres</h6>
        <ul>
          <li className="py-2 teaxt-sm">Action</li>
          <li className="py-2 teaxt-sm">Adventure</li>
          <li className="py-2 teaxt-sm">Romance</li>
        </ul>
      </div>
      <div className="">
        <h6 className="font-medium text-teal-400">General</h6>
        <ul>
          <li className="py-2 teaxt-sm">Privacy</li>
          <li className="py-2 teaxt-sm">Dashboard</li>
          <li className="py-2 teaxt-sm">Register</li>
        </ul>
      </div>
      <div className="">
        <h6 className="font-medium text-teal-400">Pages</h6>
        <ul>
          <li className="py-2 teaxt-sm">Popular</li>
          <li className="py-2 teaxt-sm">Tranding</li>
          <li className="py-2 teaxt-sm">Top</li>
        </ul>
      </div>
    </div>
  );
};

export default Paticians;
