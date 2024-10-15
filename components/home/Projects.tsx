import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-center text-[#e67e22] m-auto font-semibold font-mono text-3xl">
        PROJECTS
      </h2>
      <div className="w-fit text-center mx-auto  cursor-pointer">
        <Link href={"/projects"} className="w-fit">
          <p className=" font-bold flex gap-2 justify-center">
            See all
            <ArrowRight className="size-5 items-center content-center" />
          </p>
        </Link>
      </div>
      <h2 className="my-20 text-2xl text-center">{`Nothing for now, I'm working on it.`}</h2>
    </section>
  );
};

export default Projects;
