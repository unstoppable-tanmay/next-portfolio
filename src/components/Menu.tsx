"use client";

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import { About } from "@/types/type";

const Menu = ({ about }: { about: About }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <motion.div
        style={
          isOpen
            ? { opacity: 1, pointerEvents: "all" }
            : { opacity: 0, pointerEvents: "none" }
        }
        className="menu z-[100] fixed w-screen h-screen bg-white/5 backdrop-blur-2xl top-0 left-0 duration-500 flex items-center justify-center gap-5 flex-col text-lg "
      >
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#home"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 0 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Home
        </motion.a>
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#about"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 0.2 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          About
        </motion.a>
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#skills"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 0.4 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Skills
        </motion.a>
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#services"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 0.6 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Services
        </motion.a>
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#projects"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 0.8 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Projects{" "}
        </motion.a>
        <motion.a
          onClick={(e) => setOpen(false)}
          href="/#testimonial"
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 1 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Testimonial{" "}
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isOpen
              ? { opacity: 1, transition: { ease: "easeInOut", delay: 1.2 } }
              : { opacity: 0 }
          }
          className="menu-item hover:translate-x-4 duration-200 w-[150px]"
        >
          Contact{" "}
        </motion.div>
      </motion.div>
      <div
        className="ham-wrap w-full flex justify-between items-center px-2 pt-1 bg-transparent z-[101] sticky top-0 left-0"
        data-cursor-exclusion
      >
        <div className="logo font-medium text-lg">{about.name}</div>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          size={29}
          rounded
        />
      </div>
    </>
  );
};

export default Menu;
