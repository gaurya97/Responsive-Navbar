import React from "react";
import image from "../Images/image.png";

export const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="p-3 flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            src={image}
            className="object-cover max-w-12 max-h-12"
            alt="logo"
          />
        </div>

        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full items-center px-5">
          <ul className="flex md:flex-row flex-col items-center gap-20">
            <li className="hover:text-gray-500">Product</li>
            <li className="hover:text-gray-500">Solution</li>
            <li className="hover:text-gray-500">Resource</li>
            <li className="hover:text-gray-500">Developers</li>
            <li className="hover:text-gray-500">Pricing</li>
          </ul>
        </div>
        <div className="">
          <button className=" w-24 h-8 text-center bg-[#a6c1ee] text-white  rounded-xl hover:bg-black">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};
