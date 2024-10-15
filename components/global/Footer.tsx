import { GitBranch, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#34495e]">
      <section className="mx-auto max-w-[1000px] px-5 py-7">
        <div className="flex gap-2">
          <div className="flex-1">
            <h2 className="text-2xl font-mono mb-2">My social media</h2>
            <Link
              target="_blank"
              className="flex gap-2"
              href={"https://www.linkedin.com/in/hellytoncosta"}
            >
              <Linkedin className="text-[#2ecc71] size-5" />
              <p className="flex gap-2">linkedin.com/in/hellytoncosta/</p>
            </Link>
            <Link
              target="_blank"
              className="flex gap-2 mt-1"
              href={"https://github.com/hellytoncosta"}
            >
              <GitBranch className="text-[#2ecc71] size-5" />
              <p className="flex gap-2">github.com/hellytoncosta</p>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
