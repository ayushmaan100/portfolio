"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 list-disc pl-4 gap-y-1">
        <li>Python</li>
        <li>C/C++</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Flask</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Firebase</li>
        <li>Tailwind CSS</li>
        <li>pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>TensorFlow</li>
        <li>Scikit-learn</li>
        <li>Git/Github</li>
        <li>VS Code</li>
        <li>JWT</li>
        <li>Socket.IO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
       <p> Persuing Computer Science and Engineering in National Institute of Technology, Patna (Class of 26)</p>
        
     
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
        <p></p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="Illustration representing the developer" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi! I’m Ayushmaan, a dedicated and enthusiastic Full-Stack Developer and a Final year Computer Science undergraduate at NIT Patna (2026). I love turning ideas into scalable, efficient, and user-friendly web applications. My core development stack includes React.js, Next.js, Node.js, MongoDB, and Tailwind CSS—tools I’ve used extensively to build responsive UIs, powerful APIs, and real-time features. I’ve also worked with Flask and Firebase on the backend, especially for projects involving AI and machine learning, integrating models built with Python, NumPy, Pandas, TensorFlow, and Scikit-learn. I’m comfortable working across the full stack — from designing intuitive frontends to architecting robust backend systems with secure authentication using JWT, real-time communication via Socket.IO, and clean API structures with Express.js. Tools like Git, GitHub, and VS Code help me stay efficient, and my strong foundation in CS fundamentals (DSA, DBMS, OS, CN) ensures I build with performance and reliability in mind.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;