import { mySkills } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MySkills = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-zinc-200 to-zinc-400">
      <h2 className="text-center text-[#e67e22] mb-2 m-auto font-semibold font-mono text-3xl">
        EXPERTISE
      </h2>
      <p className="text-center text-lg px-10">
      A curated list of technologies and tools that I work with. Hover for details, click for official info.
      </p>
      <div className="max-w-5xl px-10 m-auto my-5 grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:px-10 max-lg:max-w-lg">
        {mySkills.map((card) => (
          <div
            key={card.title}
            className="bg-[#f7f7f7] px-4 py-6 rounded-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl mb-4 text-center  font-semibold ">
              {card.title}
            </h3>
            <div className="flex justify-center gap-4 px-5">
              {card.items.map((icon) => (
                <Link key={icon.title} target="_blank" href={icon.link}>
                  <Image
                    src={icon.icon}
                    alt=""
                    title={icon.title + " - " + icon.level}
                    width={100}
                    height={50}
                    className="size-10 hover:opacity-65"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default MySkills;
