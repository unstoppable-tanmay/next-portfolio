import { motion } from "framer-motion";
import React from "react";
import { TextGenerateEffect } from "./ui/text-effect";
import { About as AboutType } from "@/types/type";
import { Parallax } from "react-scroll-parallax";

const About = ({ about }: { about: AboutType }) => {
  return (
    <Parallax scale={[1.4, .7]}>
      <section className="h-screen w-full flex items-center justify-center flex-col" id="about">
        <div className="heading text-3xl font-semibold text-white">
          <span className="text-7xl">A</span>bout
        </div>
        <motion.div className="desc-wrapper w-[clamp(100px,800px,95vw)] text-center text-sm md:text-lg font-normal text-white/80">
          <TextGenerateEffect words={about.description} />
        </motion.div>
        <br />
        <div className="quote text-white/60">
          {'" '}
          {about.quote}
          {' "'}
        </div>
      </section>
    </Parallax>
  );
};

export default About;
