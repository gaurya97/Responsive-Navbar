import React from "react";
import image from "../Images/image.png";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState("top-[20%]");
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <header className="bg-[#f2f2f2e3]">
      <nav className="p-3 flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src={image} className="w-16 rounded-full " alt="logo" />
        </div>

        <div
          className={`md:static absolute md:bg-[#f2f2f2e3]  bg-white md:min-h-fit min-h-[60vh] left-0 ${toggleMenu} md:w-auto w-full items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col items-center gap-20">
            <li className="hover:text-gray-500">Product</li>
            <li className="hover:text-gray-500">Solution</li>
            <li className="hover:text-gray-500">Resource</li>
            <li className="hover:text-gray-500">Developers</li>
            <li className="hover:text-gray-500">Pricing</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className=" w-24 h-8 text-center bg-[#a6c1ee] text-white  rounded-xl hover:bg-black">
            Sign in
          </button>
          <div
            onClick={(e) => {
              setToggleIcon(!toggleIcon);
              setToggleMenu((oState) => {
                let st = oState === "top-[20%]" ? "top-[-100%]" : "top-[20%]";
                return st;
              });
              console.log("clicked");
            }}
            className="md:hidden text-3xl cursor-pointer"
          >
            {toggleIcon ? "Open" : "Close"}
          </div>
        </div>
      </nav>
    </header>
  );
};
