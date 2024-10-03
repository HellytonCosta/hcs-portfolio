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
    <section className="bg-[#34495e] text-black p-10">
      <div className="py-10 px-40 max-lg:px-10 bg-white">
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
        <div>
          <h2 className="text-3xl max-lg:text-xl max-lg:justify-center mt-6 flex uppercase items-center gap-3 text-center font-mono">
            <Code className="text-orange-400" />
            {"Employment History"}
            <Code2 className="text-orange-400" />
          </h2>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-5 gap-2 my-2">
            <div className="col-span-1 italic space-y-2">
              <p className="flex gap-2">
                <MapPin />
                Scottsdale, AZ, USA
              </p>
              <p className="flex gap-2">
                <Calendar />
                June 2024 - Presently
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl text-orange-400">
                Developer Trainee
              </h3>
              <h4 className="text-xl font-semibold">MiCamp Solutions</h4>
              <ul className="ml-4 my-2">
                <li className="list-disc">Testing skills</li>
                <li className="list-disc">Testing skills</li>
                <li className="list-disc">Testing skills</li>
                <li className="list-disc">Testing skills</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-5 gap-2 my-2">
            <div className="col-span-1 italic space-y-2">
              <p className="flex gap-2">
                <MapPin />
                Caçador, SC, BRA
              </p>
              <p className="flex gap-2">
                <Calendar />
                May 2022 - April 2024
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl  text-orange-400">
                Automation Technician
              </h3>
              <h4 className="text-xl font-semibold">MiCamp Solutions</h4>
              <ul className="ml-4 my-2">
                <li className="list-disc">Troubleshooting of PLC programs, electric panels</li>
                <li className="list-disc">Modification into pattern blocks for logic to PLCs</li>
                <li className="list-disc">Program changing (LADDER, STL, SCL)</li>
                <li className="list-disc">Retrofitting of old panels</li>
                <li className="list-disc">Creation and editing of applications in SCADA systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
