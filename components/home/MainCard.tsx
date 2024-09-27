
import Image from "next/image";
import React from "react";

const MainCard = () => {
  return (
    <div className="w-full bg-[#34495e]">
      <div className="flex gap-10 max-w-6xl w-10/12 mx-auto justify-center ">
        <div className="h-max mt-20">
          <h2 className="text-5xl text-white ">Hello World!</h2>
          <h2 className="text-5xl text-nowrap text-[#2ecc71] font-semibold">
            My name is Hellyton.
          </h2>
          <p className="mt-5 max-w-lg  text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            assumenda amet porro inventore, magni illum voluptatibus, soluta
            delectus suscipit error totam nam laborum iste! Aut cumque doloribus
            sit dolores fugit.
          </p>
        </div>
        <div className="flex-auto items-end">
          <Image
            className="items-end mt-20"
            alt="Hellyton Picture"
            src={"/images/profilePhoto2.png"}
            width={500}
            height={200}
          />
          
        </div>
      </div>
    </div>
  );
};

export default MainCard;
