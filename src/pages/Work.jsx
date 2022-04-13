import React from "react";
import { projData } from "../components/data/ProjectData";
import { motion } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import LinkHome from "../components/LinkHome";

const Work = () => {

  return (
    <div className="wrapper overflow-hidden">
    <ScrollIndicator />
    <LinkHome />
      <div className="container py-40">
        {projData.map((data) => {
          return (
            <div
              className="flex flex-col h-full justify-center py-8 px-4 lg:ml-24 lg:p-20 items-center lg:items-start lg:hover:translate-x-14 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = data.link;
              }}
            >
              <motion.h1
                initial={{ opacity: 0 , scale: 0.9, x: -50}}
                animate={{ opacity: 1 , scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="font-bold text-5xl lg:text-7xl mb-4"
              >
                {data.title}
              </motion.h1>
              <motion.h1
              initial={{ opacity: 0 , scale: 0.9, x: -50}}
              animate={{ opacity: 1 , scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="font-bold text-lg lg:text-xl text-red-600"
              >
                {data.description}
              </motion.h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
