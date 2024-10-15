import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full py-10 ">
      <div className="m-auto max-w-5xl px-20 max-xl:px-14">
        <h2 className="text-center text-[#e67e22] mb-4 m-auto font-semibold font-mono text-3xl">
          ABOUT ME
        </h2>
        <p className="mt-4 text-lg">
          🎓 Control and Automation Engineer with a passion for technology and
          software development. With 5 years of solid experience in the
          industrial automation field, working with various PLC brands, with an
          emphasis on the Siemens ecosystem.
        </p>
        <p className="py-2 text-lg">
          🚀 I am currently embarking on a new journey as a Trainee Developer,
          where I combine my engineering experience with my enthusiasm for
          software development. Over the past year and a half, I have been
          diving deeply into the world of programming, working as a freelancer
          on several projects that have allowed me to sharpen my skills.
        </p>
        <p className="py-2 text-lg">
          {`💼 The world can be a better place—let's connect and explore how we
          can add value together!`}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
