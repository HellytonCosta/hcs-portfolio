import { ArrowRight, GitBranch, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-center text-orange-400 m-auto font-semibold font-mono text-3xl">
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
      <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 px-32 my-10">
        {/* TRANSFORME SEU */}
        <div className="col-span-1 my-2">
          <div
            className="min-h-64 max-lg:min-h-80 rounded-xl bg-center bg-cover bg-no-repeat opacity-50 hover:opacity-100 transition-all"
            style={{
              backgroundImage: "url(./images/transformeseu-preview.jpg)",
            }}
          ></div>
          <div className="my-5">
            <div className="w-min">
              <Link
                href={"https://transformeseu.azurewebsites.net"}
                target="_blank"
                className="text-nowrap"
              >
                <h2 className="text-2xl font-bold text-orange-400 w-fit">
                  Transforme Seu
                </h2>
              </Link>
            </div>
            <p className="text-justify my-1">
              This is an ASP.NET MVC project using bootstrap. The goal of this
              portal, is to allow the user to fill a form, and in the end, get
              the results based on the information filled.
            </p>
            <div className="flex gap-2">
              <Link2 className="size-6 hover:text-orange-400 transition-all" />
              <GitBranch className="size-6 hover:text-orange-400 transition-all" />
            </div>
          </div>
        </div>
        {/* TRANSFORME SEU */}
        <div className="col-span-1 my-2">
          <div
            className="min-h-64 max-lg:min-h-80 rounded-xl bg-center bg-cover bg-no-repeat opacity-50 hover:opacity-100 transition-all"
            style={{
              backgroundImage: "url(./images/transformeseu-preview.jpg)",
            }}
          ></div>
          <div className="my-5">
            <div className="w-min">
              <Link
                href={"https://transformeseu.azurewebsites.net"}
                target="_blank"
                className="text-nowrap"
              >
                <h2 className="text-2xl font-bold text-orange-400 w-fit">
                  Transforme Seu
                </h2>
              </Link>
            </div>
            <p className="text-justify my-1">
              This is an ASP.NET MVC project using bootstrap. The goal of this
              portal, is to allow the user to fill a form, and in the end, get
              the results based on the information filled.
            </p>
            <div className="flex gap-2">
              <Link2 className="size-6 hover:text-orange-400 transition-all" />
              <GitBranch className="size-6 hover:text-orange-400 transition-all" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-20 hidden text-2xl text-center">{`Nothing for now, I'm working on it.`}</h2>
    </section>
  );
};

export default Projects;
