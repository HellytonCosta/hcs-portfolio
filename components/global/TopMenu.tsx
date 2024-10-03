"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const TopMenu = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickDropdown = () => {
    if (!menuDrop) {
      setIsVisible(true);
      setTimeout(() => setMenuDrop(true), 0);
    } else {
      setMenuDrop(false);
    }
  };

  useEffect(() => {
    if (!menuDrop) {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuDrop]);

  return (
    <div className="bg-[#34495e] w-full">
      <div className="flex justify-around max-lg:justify-between max-lg:mx-5 items-center min-h-16">
        <div className="flex-none content-center">
          <Link href={"/"} onClick={() => setMenuDrop(false)}>
            <Image
              className=""
              alt=""
              src={"/images/hcs-logo.png"}
              width={40}
              height={50}
            />
          </Link>
        </div>
        <div className="flex-none max-lg:hidden flex gap-8 text-center justify-center">
          <Link href={"/"} onClick={() => setMenuDrop(false)}>
            <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
              Home
            </button>
          </Link>
          <Link href={"/resume"} onClick={() => setMenuDrop(false)}>
            <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
              Resume
            </button>
          </Link>
          <Link href={"/projects"} onClick={() => setMenuDrop(false)}>
            <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
              Projects
            </button>
          </Link>
          <button className="hover:text-[#2ecc71] text-white transition ease-in-out delay-50 text-xl">
            Contact
          </button>
        </div>
        <div className="flex-none flex gap-2 items-center">
          <button className="max-lg:hidden bg-orange-400 text-[#000] px-4 py-2 rounded-full text-base text-center">
            Get in touch with me.
          </button>
          <Menu
            className="hidden max-lg:block cursor-pointer text-[#2ecc71]"
            onClick={() => handleClickDropdown()}
          />
        </div>
      </div>

      {isVisible && (
        <div
          className={`${
            menuDrop ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-500 ease-in-out text-center py-2 text-xl bg-[#34495e] m-0 p-0 w-full top-10 text-nowrap`}
        >
          <ul>
            <Link href={"/"} onClick={() => setMenuDrop(false)}>
              {" "}
              <li className="my-2">Home</li>
            </Link>
            <Link href={"/resume"} onClick={() => setMenuDrop(false)}>
              {" "}
              <li className="my-2">Resume</li>
            </Link>
            <Link href={"/projects"} onClick={() => setMenuDrop(false)}>
              {" "}
              <li className="my-2">Projects</li>
            </Link>
            <Link href={""} onClick={() => setMenuDrop(false)}>
              {" "}
              <li className="my-2">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
