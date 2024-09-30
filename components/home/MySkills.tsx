import { mySkills } from "@/constants";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <section className="w-full py-10 bg-zinc-300">
      <h2 className="text-center text-3xl">My Background</h2>
      <p className="text-center text-xl text-zinc-500">Here it is:</p>
      <div className="max-w-6xl px-10 m-auto my-5 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        {mySkills.map((item) => (
          <div
            key={item.title}
            className="bg-[#f7f7f7] px-4 py-6 rounded-xl border border-[#f7f7f7] hover:border-[#e67e22] hover:border transition ease-in-out delay-50"
          >
            <h3 className="text-xl mb-4 text-center font-semibold">
              {item.title}
            </h3>
            <div className="grid grid-cols-4 gap-0 px-5">
              {item.items.map((icon) => (
                <Image
                  key={icon.title}
                  src={icon.icon}
                      alt=""
                      title={icon.title}
                  width={100}
                  height={50}
                  className="size-10 mx-auto"
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
