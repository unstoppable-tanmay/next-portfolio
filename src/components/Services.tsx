/* eslint-disable @next/next/no-img-element */
import { Service } from "@/types/type";
import { motion } from "framer-motion";
import React from "react";

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section className="min-h-screen w-full flex flex-col gap-4 items-center justify-center p-4 py-8" id="services">
      <div className="w-[clamp(200px,70%,90vw)] header flex items-center justify-between text-[clamp(30px,4vw,90px)]">
        {"SERVICES".split("").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      <div className="services flex-1 gap-6 flex flex-col md:flex-row items-center justify-center">
        {services.map((service, i) => (
          <ServicesCard service={service} key={i} />
        ))}
      </div>
    </section>
  );
};

const ServicesCard = ({ service }: { service: Service }) => {
  return (
    <>
      <motion.div
        whileHover={{ width: "300px" }}
        className="h-[300px] w-[60px] max-w-[90%] min-w-[10px] rounded-xl relative overflow-hidden hidden md:flex group"
      >
        <img
          src={service.image.url}
          alt=""
          className="w-full h-full aspect-square rounded-md object-cover absolute"
        />
        <div className="layer group-hover:bg-black/60 duration-200 w-[300px] flex-shrink-0 h-full z-[100] flex items-center justify-center flex-col text-opacity-0 group-hover:text-opacity-100 text-white">
          <div className="title font-semibold text-2xl text-center">
            {service.name}
          </div>
          <div className="details text-4xl font-bold">{service.charge}</div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ height: "200px" }}
        className="h-[30px] w-[85vw] max-w-[90%] min-w-[10px] rounded-xl relative overflow-hidden flex md:hidden group"
      >
        <img
          src={service.image.url}
          alt=""
          className="w-full h-full aspect-square rounded-md object-cover absolute"
        />
        <div className="layer group-hover:bg-black/60 duration-200 w-[300px] flex-shrink-0 h-full z-[100] flex items-center justify-center flex-col text-opacity-0 group-hover:text-opacity-100 text-white">
          <div className="title font-semibold text-2xl text-center">
            {service.name}
          </div>
          <div className="details text-4xl font-bold">{service.charge}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
