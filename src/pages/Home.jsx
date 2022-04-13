import React, { useState } from "react";
import IMG from "../components/Assets/pic.jpeg";
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

const Home = () => {
  const [divAhovering, DivAHoveringProps] = onHover();
  const [divBhovering, DivBHoveringProps] = onHover();
  const [divCHovering, DivCHoveringProps] = onHover();
  const [textChange, setTextChange] = useState(false);
  return (
    <div className="wrapper h-screen relative overflow-hidden ">
      <div className="container h-full hidden lg:flex ">
        <motion.img
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          src={IMG}
          alt=""
          className="opacity-70 hidden lg:block"
        />
        <div className="navs h-full flex flex-col gap-6 items-start p-20 justify-center lg:ml-24  relative">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            {...DivAHoveringProps}
            className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl scale-110 relative z-20 font-bold hover:translate-x-12 transition ease-in-out duration-200 cursor-pointer group  "
          >
            <Link to="/about">{!divAhovering ? "Hello." : "About"}</Link>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            {...DivBHoveringProps}
            className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl scale-110 relative z-20 font-bold hover:translate-x-12 transition ease-in-out duration-200 cursor-pointer group  text-red-600"
          >
            <Link to="/work">{!divBhovering ? "I am" : "Work"}</Link>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            {...DivCHoveringProps}
            className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl scale-110 relative z-20 font-bold hover:translate-x-12 transition ease-in-out duration-200 cursor-pointer group  text-red-600"
          >
            <Link to="Contact">{!divCHovering ? "Debosmit" : "Contact"}</Link>
          </motion.h1>
        </div>
      </div>
      <div className="container h-full flex relative lg:hidden">
        <motion.img
          nitial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5 }}
          src={IMG}
          alt=""
          className=" object-cover opacity-50 bg-gradient-to-tl from-white to-black"
        />
        <div className="absolute bg-transparent h-full flex flex-col gap-6 items-start p-20 justify-center text-7xl">
          {textChange ? (
            <>
              <Link to="about" className="bg-transparent ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-transparent font-bold -translate-y-12"
                >
                  About
                </motion.h1>
              </Link>
              <Link to="work" className="bg-transparent ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-transparent font-bold -translate-y-12 text-red-500"
                >
                  Work
                </motion.h1>
              </Link>
              <Link to="contact" className="bg-transparent ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-transparent font-bold -translate-y-12 text-red-500 drop-shadow-lg"
                >
                  Contact
                </motion.h1>
              </Link>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-transparent font-bold -translate-y-12"
              >
                Hello
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="bg-transparent font-bold -translate-y-12 text-red-500"
              >
                I am
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="bg-transparent font-bold -translate-y-12 text-red-500 drop-shadow-lg"
              >
                Debosmit
              </motion.h1>
            </>
          )}
        </div>
        <h1
          className="absolute bg-transparent  w-full flex justify-center items-end p-8 mt-10 text-xl animate-bounce "
          onClick={() => setTextChange(!textChange)}
        >
          Tap Here
        </h1>
      </div>
    </div>
  );
};

export default Home;
