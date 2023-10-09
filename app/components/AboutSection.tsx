"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>Next</li>
        <li>React Native</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fazztrack</li>
        <li>SMA Telkom Bandung</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fazztrack Fullstack Web Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/pc-setup.png"
          height={500}
          width={500}
          alt="my setup"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello, I&apos;m Refaldy, a passionate and experienced web developer
            dedicated to crafting visually appealing and highly functional
            websites. With a strong foundation in front-end and back-end
            development, I thrive on turning innovative ideas into seamless
            online experiences. My journey in the world of web development has
            allowed me to work with a diverse range of clients, from startups to
            established businesses, and I take pride in delivering solutions
            that not only meet but exceed their expectations. Whether it&apos;s
            responsive design, optimizing user experiences, or tackling complex
            coding challenges, I&apos;m always up for the task. I&apos;m excited
            to collaborate with you to bring your digital dreams to life.
            Let&apos;s create something remarkable together.
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
