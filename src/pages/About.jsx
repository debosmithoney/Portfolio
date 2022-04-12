import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const onHover = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
};

const About = () => {
  const [divAhovering, DivAHoveringProps] = onHover();
  return (
    <div className="wrapper">
      <Link to="/">
        <div
          className="absolute top-40 right-32 cursor-pointer transition ease-in-out duration-200 hover:-translate-x-8 font-bold"
          {...DivAHoveringProps}
        >
          <h1>• Debosmit{!divAhovering ? "" : " Choudhury"}</h1>
        </div>
      </Link>
      <div className="h-screen w-full p-4 flex flex-col justify-center ml-24 lg:p-24 items-start ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl lg:text-8xl mb-4"
        >
          I design & build
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl lg:text-8xl"
        >
          digital products
        </motion.h1>
      </div>
    </div>
  );
};

export default About;
