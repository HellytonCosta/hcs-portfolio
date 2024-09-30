"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const TopMenu = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const handleClickDropdown = () => {
    if (!menuDrop) {
      setMenuDrop(true);
    } else {
      setMenuDrop(false);
    }
    console.log(menuDrop);
  };

  return (
    <div className="bg-[#34495e] w-full">
      <div className="flex justify-around max-lg:justify-between max-lg:mx-5 items-center min-h-16">
        <div className="flex-none content-center">
          <Image
            className=""
            alt=""
            src={"/images/hcs-logo.png"}
            width={40}
            height={50}
          />
        </div>
        <div className="flex-none max-lg:hidden flex gap-8 text-center justify-center">
          <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
            Home 
          </button>
          <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
            Resume
          </button>
          <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
            Projects
          </button>
          <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
            Contact
          </button>
        </div>
        <div className="flex-none flex gap-2 items-center">
          <button className="max-lg:hidden bg-[#e67e22] text-[#000]  px-4 py-2 rounded-full text-base text-center">
            Get in touch with me.
          </button>
          <Menu
            className="hidden max-lg:block cursor-pointer text-[#2ecc71]"
            onClick={() => handleClickDropdown()}
          />
          {menuDrop && (
            <div className="relative ">
              <div className="absolute p-2 transition-transform delay-100 ease-in-out bg-slate-600 border rounded-lg max-w-36 top-10 right-0 text-nowrap">
                <ul>
                  <li className="">Home</li>
                  <li className="">Resume</li>
                  <li className="">Projects</li>
                  <li className="">Contact</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
