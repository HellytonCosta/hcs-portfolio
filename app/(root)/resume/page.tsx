import { educationalQualifications, experience } from "@/constants";
import {
  Cake,
  Calendar,
  Code,
  Code2,
  GitBranchIcon,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="bg-gradient-to-r from-[#043060]  to-[#051f3b] text-black p-10">
      <div className="mx-auto py-10 px-24 max-lg:px-10 bg-white max-w-[1200px]">
        <h1 className="text-4xl max-lg:text-2xl my-5 flex justify-center items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"Hellyton Costa"}
          <Code2 className="text-orange-400" />
        </h1>
        {/* basic info */}
        <div className="text-start my-1">
          <ul className="flex max-xl:block gap-5 justify-center space-y-1">
            <li className="flex gap-2 items-center">
              <Cake className="flex-none size-5 text-orange-400" />
              <p className="flex-auto mt-1">September 1st, 1997</p>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="flex-none size-5  text-orange-400" />
              <p className="flex-auto">hellyton_cs@hotmail.com</p>
            </li>
            <li className="flex gap-2 items-center">
              <Linkedin className="flex-none size-5 text-orange-400" />
              <Link
                target="_blank"
                className="flex-auto items-center"
                href={"https://www.linkedin.com/in/hellytoncosta"}
              >
                linkedin.com/in/hellytoncosta/
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <GitBranchIcon className="flex-none size-5  text-orange-400" />
              <Link
                target="_blank"
                className="flex-auto items-center"
                href={"https://github.com/hellytoncosta"}
              >
                github.com/hellytoncosta/
              </Link>
            </li>
          </ul>
        </div>
        {/* PERSONAL PROFILE */}
        <div>
          <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
            <Code className="text-orange-400" />
            {"Personal Profile"}
            <Code2 className="text-orange-400" />
          </h2>
          <p className="my-2 text-justify">
            Passionate about learning, teaching, and technology, with a focus on
            making a positive impact. I thrive on tackling new challenges to
            enhance my professional skills, emphasizing adaptability, teamwork,
            and fast learning. With a strong foundation in industrial
            automation, including 7 years of experience in electrical
            maintenance, automation, and PLC development, I have transitioned
            into full-stack development. Excited to apply my skills in software
            development and continue evolving in this dynamic field.
          </p>
        </div>
        {/* EMPLOYMENT HISTORY */}
        <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"Employment History"}
          <Code2 className="text-orange-400" />
        </h2>
        {experience.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-5 gap-2 my-3"
            >
              <div className="col-span-1 italic space-y-2">
                <p className="flex gap-2">
                  <MapPin />
                  {item.location}
                </p>
                <p className="flex gap-2">
                  <Calendar />
                  {item.from} - {item.to}
                </p>
              </div>
              <div className="col-span-1">
                <h3 className="text-2xl text-orange-400 max-lg:text-xl">
                  {item.position}
                </h3>
                <h4 className="text-xl font-semibold max-lg:text-base">
                  {item.company}
                </h4>
                <ul className="ml-4 my-2">
                  <li className="list-disc">{item.task1}</li>
                  <li className="list-disc">{item.task2}</li>
                  <li className="list-disc">{item.task3}</li>
                  <li className="list-disc">{item.task4}</li>
                  <li className="list-disc">{item?.task5}</li>
                </ul>
              </div>
              <hr className="hidden max-lg:block border-zinc-300" />
            </div>
          );
        })}

        {/* EDUCATIONAL QUALIFICATIONS */}
        <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"Educational Qualifications"}
          <Code2 className="text-orange-400" />
        </h2>
        {educationalQualifications.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-5 gap-4 my-3"
            >
              <div className="col-span-1 italic mt-1">
                <p className="flex gap-2 justify-end max-lg:justify-start">
                  <MapPin />
                  {item.location}
                </p>
                <p className="flex gap-2 justify-end max-lg:justify-start">
                  <Calendar />
                  {item.from} - {item.to}
                </p>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl text-orange-400 max-lg:text-xl">
                  {item.course}
                </h3>
                <h4 className="text-xl font-semibold max-lg:text-base">
                  {item.university}
                </h4>
              </div>
              <hr className="hidden max-lg:block border-zinc-300" />
            </div>
          );
        })}

        {/* GENERAL COURSES */}
        <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"General Courses / Bootcamps"}
          <Code2 className="text-orange-400" />
        </h2>
        <ul className="max-lg:text-sm mt-2">
          <li>
            <b>Bayswater College, London, UK</b> - General English 40 hours
          </li>
          <li>
            <b>Programiz</b> - Java Master (Online Course)
          </li>
          <li>
            <b>LinkedIn Learning</b> - Scrum Foundations
          </li>
          <li>
            <b>DIO.me</b> - HTML Web Developer Training (21 Hours)
          </li>
          <li>
            <b>DIO.me</b>
            {` - Bootcamp 'Potência Tech powered by iFood' - Java Beginners (91 Hours)`}
          </li>
          <li>
            <b>DIO.me</b> - React Developer Training (34 Hours - Ongoing 94%)
          </li>
          <li>
            <b>DIO.me</b> - C# Developer Training (93 Hours - Ongoing 80%)
          </li>
        </ul>
        {/* GENERAL SKILLS */}
        <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"General Skills"}
          <Code2 className="text-orange-400" />
        </h2>
        <ul className="max-lg:text-sm mt-2">
          <li>
            <b>PLC development</b> - Ladder, STL - Structured Text, C – TIA
            Portal | Step7 | Studio 5000
          </li>
          <li>
            <b>SCADA development</b> – WinCC | RSView | Intouch | Indusoft Web
            Studio{" "}
          </li>
          <li>
            <b>Programming Languages</b> - C# | Java | JavaScript | TypeScript
          </li>
          <li>
            <b>Frameworks</b> - .NET | Next.js | React | Spring
          </li>
          <li>
            <b>Database</b> - MS SQL Server | Azure SQL | MySql
          </li>
          <li>
            <b>Styling</b> - Tailwind CSS | Bootstrap | Pure CSS
          </li>
          <li>
            <b>General Tools</b> - VS Code | Visual Studio | IntelliJ | Azure |
            Figma
          </li>
        </ul>
        {/* LANGUAGE SKILLS */}
        <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
          <Code className="text-orange-400" />
          {"Language Skills"}
          <Code2 className="text-orange-400" />
        </h2>
        <ul className="max-lg:text-sm mt-2">
          <li>
            <b>Portuguese</b> - Native
          </li>
          <li>
            <b>English</b> - Advanced
          </li>
          <li>
            <b>Spanish</b> - Beginner
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
