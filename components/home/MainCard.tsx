"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const MainCard = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!titleRef.current || !nameRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".main-card-container",
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#043060] to-[#051f3b]">
      <div className="flex pt-32 max-lg:flex-wrap gap-2 max-w-6xl mx-auto px-10 justify-center">
        <div className="flex-auto py-16 content-center max-lg:py-20">
          <h2
            ref={titleRef}
            className="text-5xl text-white max-lg:text-3xl font-semibold font-mono"
          >
            Hello World!
          </h2>
          <h2
            ref={nameRef}
            className="text-6xl  w-fit max-lg:text-3xl font-bold bg-clip-text text-[#2ecc71] "
          >
            My name is Hellyton.
          </h2>
          <p className="mt-3 text-lg text-white font-light" ref={titleRef}>
            {`I'm a full-stack developer with over 1 year of experience in software development. Scroll down to learn more about me.`}
          </p>
        </div>
        <div className="flex-auto content-end">
          <Image
            ref={imageRef}
            className="mx-auto"
            alt="Hellyton Picture"
            src={"/images/profilePhoto2.png"}
            width={600}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
