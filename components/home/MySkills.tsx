import { mySkills } from "@/constants";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <section className="w-full py-10 bg-zinc-300">
      <h2 className="text-center text-[#e67e22] mb-2 m-auto font-semibold font-mono text-3xl">EXPERIENCE</h2>
      <p className="text-center text-xl ">These are the summary of my skills based on my experiences: </p>
      <p className="text-center text-base text-zinc-500">Hover the icons to get more info</p>
      <div className="max-w-5xl px-10 m-auto my-5 grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:px-10 max-lg:max-w-lg">
        {mySkills.map((item) => (
          <div
            key={item.title}
            className="bg-[#f7f7f7] px-4 py-6 rounded-md border border-[#f7f7f7] hover:border-[#e67e22] hover:border transition-all ease-in-out delay-75"
          >
            <h3 className="text-xl mb-4 text-center font-semibold">
              {item.title}
            </h3>
            <div className="flex justify-center gap-4 px-5">
              {item.items.map((icon) => (
                <Image
                  key={icon.title}
                  src={icon.icon}
                  alt=""
                  title={(icon.title + " - " + icon.level)}
                  width={100}
                  height={50}
                  className="size-10"
                />
              ))}
            </div>
          </div>
        ))}

        <div className="bg-[#f7f7f7] px-4 py-6 rounded-xl hidden border border-[#f7f7f7] hover:border-[#e67e22] hover:border transition ease-in-out delay-50">
          <h3 className="text-xl mb-4 text-center font-semibold">
            Programming Languages
          </h3>
          <div className="grid grid-cols-4 gap-2">
            <Image
              src={"/logos/csharp.svg"}
              alt=""
              width={100}
              height={50}
              className="size-10 mx-auto"
            />
            <Image
              src={"/logos/csharp.svg"}
              alt=""
              width={100}
              height={50}
              className="size-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
