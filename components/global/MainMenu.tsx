import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const MainMenu = () => {
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
          <button className="hover:text-[#2ecc71] transition ease-in-out delay-50 text-xl">Home</button>
          <button className="hover:text-[#2ecc71] transition ease-in-out delay-50 text-xl">Resume</button>
          <button className="hover:text-[#2ecc71] transition ease-in-out delay-50 text-xl">Projects</button>
        </div>
        <div className="flex-none flex gap-2 items-center">
          <button className="max-lg:hidden bg-[#e67e22] text-[#000]  px-4 py-2 rounded-full text-base text-center">
            Get in touch with me.
          </button>
          <Menu className="hidden max-lg:block text-[#2ecc71]" />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
