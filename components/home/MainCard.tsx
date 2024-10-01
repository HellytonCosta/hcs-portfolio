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
          <h2 className="text-5xl text-[#2ecc71] max-lg:text-3xl font-semibold font-mono">
            My name is Hellyton.
          </h2>
          <p className="mt-3 text-lg text-white font-mono">
           {`I'm a Full stack developer, within almost 2 years of experience on
            software development, scroll down to see more about me`}.
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
