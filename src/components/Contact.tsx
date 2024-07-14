/* eslint-disable @next/next/no-img-element */
import { SocialHandle } from "@/types/type";
import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const Contact = ({ social_handles }: { social_handles: SocialHandle[] }) => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center flex-col"
      id="contact"
    >
      <div className=" flex gap-2 justify-center flex-col flex-1">
        {social_handles.map((social, i) => {
          return (
            <Parallax
              key={i}
              speed={i * i}
              opacity={[0, (i / 10 + 1) * (i / 10 + 1)]}
            >
              <a
                className="cursor-pointer text-[clamp(25px,5vw,70px)] font-semibold"
                data-cursor-background-image={social.image.url}
                data-cursor-size="80px"
              >
                {social.platform}
                {/* <img src={social.image.url} alt="" className="w-20 aspect-square" /> */}
              </a>
            </Parallax>
          );
        })}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="form flex flex-col justify-center "
        >
          <div className="text-xl">If Not In Above Then Message Me...</div>
          <input
            type="text"
            name=""
            id=""
            className="outline-none border-none w-[clamp(200px,500px,90vw)] px-3 py-2 text-black"
            placeholder="just your message"
          />
        </motion.div>
      </div>
      <header className="text-[clamp(40px,7vw,90px)] font-semibold w-full flex justify-end">
        Contact.
      </header>
    </section>
  );
};

export default Contact;
