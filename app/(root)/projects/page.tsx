/* eslint-disable @next/next/no-img-element */
import { myProjects } from "@/constants";
import { GitBranch, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-5 bg-white min-h-[750px] text-black">
      <h2 className="text-center text-orange-400 m-auto font-semibold font-mono text-3xl">
        PROJECTS
      </h2>
      <div className="flex gap-2 m-auto justify-center py-2">
        <p className="text-center ">Here are some of them, check my github or contact me about more info.</p>
        <Link href={"https://github.com/HellytonCosta"} target="_blank">
          <Image className="hover:scale-125 transition-all duration-200" width={25} height={25} src={"/images/github.png"} alt="GitHub Logo" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 max-lg:grid-cols-1 px-32 my-6">
        {myProjects.map((project) => (
          <div key={project.id} className="">
            <Link
              href={project.websiteLink}
              target="_blank"
              className="text-nowrap"
            >
              <div className="col-span-1 my-2">
                <div
                  className="min-h-64 max-lg:min-h-80 rounded-xl bg-center bg-cover bg-no-repeat opacity-50 hover:opacity-100 transition-all"
                  style={{
                    backgroundImage: project.backgroundImage,
                  }}
                ></div>
              </div>
            </Link>
            <div className="my-5">
              <h2 className="text-2xl font-bold text-orange-400 w-fit">
                {project.title}
              </h2>

              <p className="text-justify my-1">{project.description}</p>
              <div className="flex gap-2">
                <Link2 className="size-6 hover:text-orange-400 transition-all" />
                <GitBranch className="size-6 hover:text-orange-400 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
