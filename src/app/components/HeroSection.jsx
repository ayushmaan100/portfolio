"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hello, I'm Ayushmaan",
                1000,
                "Full Stack Web Developer",
                1000,
        
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Passionate full-stack developer with expertise in React.js, Next.js, Node.js, 
          and MongoDB. I focus on building scalable, high-performance web applications with clean architecture and responsive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:ayushmaan.at2004@gmail.com"
              className="px-6 py-3 rounded-full bg-orange-600 text-white text-center hover:bg-[#2c2c2c] w-full sm:w-auto"
            >
              Hire Me
            </Link>
            <Link
              href="/CV.pdf"
              className="px-6 py-3 rounded-full bg-orange-600 text-white text-center hover:bg-[#2c2c2c] w-full sm:w-auto"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-end items-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;