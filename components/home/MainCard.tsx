import Image from "next/image";
import React from "react";

const MainCard = () => {
  return (
    <div className="w-full bg-[#34495e]">
      <div className="flex max-md:flex-wrap gap-2 max-w-6xl w-8/12 mx-auto justify-center ">
        <div className="flex-auto h-max mt-20">
          <h2 className="text-5xl text-white max-lg:text-3xl font-semibold ">Hello World!</h2>
          <h2 className="text-5xl text-nowrap text-[#2ecc71] max-lg:text-4xl font-semibold">
            My name is Hellyton.
          </h2>
          <p className="mt-3 text-xl text-white">Full stack developer.</p>
        </div>
        <div className="flex-auto items-end">
          <Image
            className="items-end mx-auto mt-20 max-md:mt-2"
            alt="Hellyton Picture"
            src={"/images/profilePhoto2.png"}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
