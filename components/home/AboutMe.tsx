import React from "react";
import { Rocket, Laptop, GraduationCap } from "lucide-react";
const AboutMe = () => {
  return (
    <section className="w-full py-10 ">
      <div className="m-auto max-w-7xl px-20 max-xl:px-14">
        <h2 className="text-center text-[#e67e22] mb-4 m-auto font-semibold font-mono text-3xl">
          ABOUT ME
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 py-5 px-10 bg-white shadow-md rounded-2xl my-4 ">
          <div className="p-2 sm:p-5 align-middle justify-center content-center">
            <GraduationCap className="text-blue-900 mx-auto size-16" size={0} />
          </div>
          <p className="content-center text-center sm:text-start text-sm sm:text-base">
            I am a Control and Automation Engineer who found software
            development to be an opportunity to work with modern and
            continuously evolving technologies. With 5 years of experience in
            Industrial Automation I bring a solid background in PLC programming.
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-5 sm:gap-10 py-5 px-10 bg-white shadow-md rounded-2xl my-4 ">
          <p className="content-center text-center sm:text-start text-sm sm:text-base">
            Currently, I’m working as a full-stack developer, focusing on
            ASP.NET MVC applications. I have experience building robust
            solutions focused on user experience, working on projects that
            require systems integration, data visualization, and customization.
          </p>
          <div className="p-2 sm:p-5 align-middle justify-center content-center">
            <Laptop className="text-blue-900 mx-auto size-16" size={0} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 py-5 px-10 bg-white shadow-md rounded-2xl my-4 ">
          <div className="p-2 sm:p-5 align-middle justify-center content-center">
            <Rocket className="text-blue-900 mx-auto size-16" size={0} />
          </div>
          <p className="content-center text-center sm:text-start text-sm sm:text-base">
            I am particularly interested in Back-End, but I also explore
            Front-End using React, Next.js, and TypeScript. Constantly suffering
            (laughing) with algorithms and applying good practices, I’m
            naturally curious about software architecture and scalable
            applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
