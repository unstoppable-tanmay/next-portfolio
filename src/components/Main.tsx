"use client";

import React from "react";
import Menu from "./Menu";
import Landing from "./Landing";
import { Data } from "@/types/type";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Main = ({ data }: { data: Data }) => {
  return (
    <ParallaxProvider>
      <main className="main w-full min-h-screen overflow-x-clip relative">
        <Cursor isGelly={true} cursorBackgrounColor="#fff" />

        <Menu about={data.user.about} />
        <Landing about={data.user.about} />
        <About about={data.user.about} />
        <Skills skills={data.user.skills} />
        <Services services={data.user.services} />
        {/* <Projects projects={data.user.projects} /> */}
        {/* <Timeline timeline={data.user.timeline} /> */}
      </main>
    </ParallaxProvider>
  );
};

export default Main;
