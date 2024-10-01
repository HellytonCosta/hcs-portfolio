import { ArrowRight } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-center text-[#e67e22] m-auto font-semibold font-mono text-3xl">
        PROJECTS
      </h2>
      <p className="text-center cursor-pointer font-bold flex gap-2 justify-center">
        See all <ArrowRight className="size-5 items-center content-center"/>
      </p>
    </section> 
  );
};

export default Projects;
