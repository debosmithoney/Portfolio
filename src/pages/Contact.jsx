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

const Contact = () => {
  const [divAhovering, DivAHoveringProps] = onHover();
  return (
    <div className="wrapper">
      <Link to="/">
        <div
          className="absolute top-20 lg:top-40 right-20 lg:right-32 cursor-pointer transition ease-in-out duration-200 hover:-translate-x-8 font-bold"
          {...DivAHoveringProps}
        >
          <h1 className="transition ease-in-out duration-300 hover:text-red-600">• Debosmit{!divAhovering ? "" : " Choudhury"}</h1>
        </div>
      </Link>
      <div className="h-screen w-full p-4 flex flex-col justify-center lg:ml-24 lg:p-24 items-center lg:items-start ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl lg:text-8xl mb-4"
        >
          Let's make
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl lg:text-8xl"
        >
          something great!
        </motion.h1>
      </div>
    </div>
  );
};

export default Contact;
