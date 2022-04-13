import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import LinkHome from "../components/LinkHome";
import Resume from "../components/Assets/resume.pdf";

const About = () => {
  return (
    <div className="wrapper overflow-hidden">
      <ScrollIndicator />
      <LinkHome />
      <div className="h-[750px] w-full  flex flex-col justify-center lg:ml-24 p-4 lg:px-24 items-center lg:items-start ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4"
        >
          I design & build
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          digital products
        </motion.h1>
      </div>
      <div className="m-4 lg:mx-32">
        <div className=" lg:px-36 mx-12">
          <h1 className="text-4xl font-bold mb-8 lg:mb-16">About me</h1>
          <p className=" text-lg lg:text-xl max-w-2xl">
            Hi, I'm Debosmit Choudhury. I am a tier 3 college student, striving
            learner and working hard with over for 1.5+years of experience in a
            wide range of design disciplines.
            <br /> <br />I am a self-taught developer, with a passion for
            learning and interested in newer technologies and tech stack.
            Turnover was created 2 years back during the COVID-19 Lockdown which
            lend me a chance on larning ReactJS and slowly slowly understanding
            the varied range of technologies and frameworks associated with it.
            Diving into the world of web development finally was able to break
            into MERN stack.
            <br /> <br />
            Fueled by high energy levels and boundless enthusiasm, I'm inspired
            and more willing to work on myself to learn and grow more as though
            there isn't any accurate age for learning. I'm passionate about
            about my ability to entertain and inspire. I'm never satisfied to
            come up with ideas. Instead I have an urge and need to act on them.
            <br /> <br />
            My abundant enegry fuels me in pursuit of many interest, hobbies,
            one of them being a{" "}
            <a
              href="https://www.instagram.com/_snap.it___/"
              className="text-red-600"
            >
              Photographer
            </a>{" "}
            , through which i tend to show people my prespective of view and the
            way I want to describe my imaginary representation.
            <br /> <br />
            Read more and get to know me by clicking on the link bellow <br />{" "}
            <br />
            <a
              href={Resume}
              className="cursor-pointer transition ease-in-out duration-300 text-red-600 hover:text-white font-bold"
            >
              My Resume (82kb)
            </a>
            <br /><br /><br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
