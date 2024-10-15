/* eslint-disable @next/next/no-img-element */
import React from "react";

const Page = () => {
  return (
    <div className="p-5 bg-white h-screen">
      <p className="text-black text-xl text-center">Nothing? </p>
      <p className="text-black text-xl text-center mb-5">
        {"I'm probably working on it, sorry."}
      </p>
      <div className="flex justify-center items-center">
        <img
          src={"/gifs/where-you.gif"}
          alt="Descrição do GIF"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
