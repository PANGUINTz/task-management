import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white py-5 px-10">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-primary_pink flex items-center justify-center text-white">
            T
          </div>
          <p className="text-primary_pink font-bold">TASK</p>
        </div>
        <ul className="flex gap-10 font-bold text-gray-400">
          <li className="text-primary_pink">Projects</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>
        <h1>noti</h1>
      </div>
    </div>
  );
};

export default Header;
