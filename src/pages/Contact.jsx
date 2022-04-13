import React from "react";
import { motion } from "framer-motion";
import LinkHome from "../components/LinkHome";
import ScrollIndicator from "../components/ScrollIndicator";


const Contact = () => {
  return (
    <div className="wrapper overflow-hidden">
      <ScrollIndicator />
      <LinkHome />
      <div className="h-[750px] w-full p-4 flex flex-col justify-center lg:ml-24 lg:p-24 items-center lg:items-start ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4"
        >
          Let's make
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          something great!
        </motion.h1>
      </div>
      <div className="m-4 lg:mx-32">
        <div className=" lg:px-36 mx-12">
          <h1 className="text-4xl font-bold mb-8 lg:mb-16">Contact me</h1>
          <p className=" text-lg lg:text-xl max-w-2xl pb-32 md:pb-36 lg:pb-44">
            I'm currently seeking out oportunities to work along various people
            to build a better future. I want to bring my collective design and
            ideas to the table where we can work together and sort out the real
            business problems in a way tat optimizes all of our respective
            experience and knowledge.
            <br /> <br />
            Lets work together and bring out something for the further future.
            <br /> <br />
            <div
              className="font-bold text-2xl cursor-pointer text-red-600 lg:hover:translate-x-12 transition-all ease-in-out duration-300"
              onClick={() =>
                (window.location.href =
                  "mailto:dchoudhury2000@gmail.com" +
                  "?cc=" +
                  "&subject=" +
                  encodeURIComponent("Get in Touch") +
                  "&body=" +
                  encodeURIComponent(
                    `Hey Debosmit Choudhury, I have viewed your profile and I'm interested in working with you.`
                  ))
              }
            >
              dchoudhury2000@gmail.com
            </div>
            <br />
            <div
              onClick={() =>
                window.open("https://github.com/debosmithoney", "_blank")
              }
              className="font-bold text-2xl cursor-pointer text-red-600 lg:hover:translate-x-12 transition-all ease-in-out duration-300"
            >
              Github
            </div>
            <br />
            <div
              className="font-bold text-2xl cursor-pointer text-red-600 lg:hover:translate-x-12 transition-all ease-in-out duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/debosmit-choudhury-38387287/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </div>
            <br />
            <div
              onClick={() =>
                window.open("https://twitter.com/DebosmitHoney", "_blank")
              }
              className="font-bold text-2xl cursor-pointer text-red-600 lg:hover:translate-x-12 transition-all ease-in-out duration-300"
            >
              Twitter
            </div>
            <br />
            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/debosmithoney/",
                  "_blank"
                )
              }
              className="font-bold text-2xl cursor-pointer text-red-600 lg:hover:translate-x-12 transition-all ease-in-out duration-300"
            >
              Instagram
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
