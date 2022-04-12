import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projData } from "../components/data/ProjectData";
import { motion } from "framer-motion";

const onHover = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
};
const Work = () => {
  const [divAhovering, DivAHoveringProps] = onHover();

  return (
    <div className="wrapper">
      <Link to="/">
        <div
          className="absolute top-20 lg:top-40 right-20 lg:right-32 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-x-8 font-bold z-50"
          {...DivAHoveringProps}
        >
          <h1 className="transition ease-in-out duration-300 hover:text-red-600">
            • Debosmit{!divAhovering ? "" : " Choudhury"}
          </h1>
        </div>
      </Link>
      <div className="container py-40">
      
      {projData.map((data)=> {
        return (
          <div className="flex flex-col h-full justify-center py-8 px-4 lg:ml-24 lg:p-20 items-center lg:items-start lg:hover:translate-x-14 transition-all ease-in-out duration-300 cursor-pointer">
          
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-bold text-5xl lg:text-7xl mb-4"
            >
              {data.title}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
