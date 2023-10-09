"use client";

import React from "react";
import Image from "next/image";
import TextAnimation from "./partials/TextAnimation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
              Hello I&apos;m{" "}
            </span>
            <br />
            <TextAnimation />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text:xl mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            eos.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-primary to-secondary hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full bg-gradient-to-br from-primary via-primary to-secondary sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] flex justify-center w-fit">
            <Image
              src="/images/cuties.png"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
