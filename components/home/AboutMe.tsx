import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full py-10 ">
      <div className="m-auto max-w-5xl px-20 max-xl:px-14">
        <h2 className="text-center text-[#e67e22] mb-4 m-auto font-semibold font-mono text-3xl">
          ABOUT ME
        </h2>
        <p className="mt-4 text-lg">
          🎓 I am a Control and Automation Engineer who found software
          development to be an opportunity to work with modern and continuously
          evolving technologies. With 5 years of experience in Industrial
          Automation — especially in the Siemens ecosystem — I bring a solid
          background in PLC logic, industrial networks, and programming.
        </p>
        <p className="py-2 text-lg">
          💻 Currently, I’m working as a full-stack developer, focusing on
          ASP.NET MVC applications. I have experience building robust solutions
          focused on user experience, working on projects that require systems
          integration, data visualization, and customization.
        </p>
        <p className="py-2 text-lg">
          🚀 I am particularly interested in Back-End, but I also explore
          Front-End using React, Next.js, and TypeScript. Constantly suffering
          (laughing) with algorithms and applying good practices, I’m naturally
          curious about software architecture and scalable applications.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
