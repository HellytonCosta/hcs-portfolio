import Image from "next/image";
import React from "react";

const MainCard = () => {
  return (
    <div className="w-full bg-[#34495e] ">
      <div className="flex max-lg:flex-wrap gap-2 max-w-6xl mx-auto px-10 justify-center ">
        <div className="flex-auto py-16 content-center max-lg:py-20 ">
          <h2 className="text-5xl text-white max-lg:text-3xl font-semibold font-mono ">
            Hello World!
          </h2>
          <h2 className="text-6xl pb-1 w-fit max-lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ecc71] to-[#269e58]">
            My name is Hellyton.
          </h2>
          <p className="mt-3 text-lg text-white font-mono">
            {`I'm a full-stack developer with over 1 year of experience in software development. Scroll down to learn more about me.`}
          </p>
        </div>
        <div className="flex-auto content-end">
          <Image
            className="mx-auto "
            alt="Hellyton Picture"
            src={"/images/profilePhoto2.png"}
            width={600}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
