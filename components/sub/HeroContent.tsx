"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col xl:flex-row items-center justify-between px-10 xl:px-20 mt-28 xl:mt-40 w-full z-20 gap-10"
    >
      <div className="flex flex-col gap-5 justify-center text-start flex-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-1 border border-[#ffffff8b] opacity-[0.9] "
        >
          <SparklesIcon className="text-white mr-2.5 h-4 xl:h-7 w-4 xl:w-7" />
          <h1 className="welcome-text text-white text-md xl:text-xl">
            Bytescrafters Pty Ltd
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 xl:gap-6 mt-2 xl:mt-6 text-3xl xl:text-7xl text-white  font-semibold w-auto h-auto"
        >
          <span>
            Where
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-100">
              {" "}
              Ideas{" "}
            </span>
          </span>
          <span className="text-3xl xl:text-7xl">Become Premium,</span>
          <span className="text-3xl xl:text-7xl">Intelligent Software</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm xl:text-2xl text-gray-400 my-5 mr-0 xl:mr-20"
        >
          We craft modern digital experiences — from websites and apps to
          automations and AI — built with premium quality and a friendly, human
          touch.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer  rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 flex justify-center items-center relative"
      >
        <Image
          src="/monitor-screen.png"
          alt="Monitor Screen"
          width={2000}
          height={1600}
          className="w-full h-auto"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute top-[4%] left-[4%] w-[92.5%] h-[70%] object-cover"
        >
          <source src="/typing-main.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

{
  /* <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 flex justify-center items-center relative"
      >
        <Image
          src="/monitor-screen.png"
          alt="Monitor Screen"
          width={2000}
          height={1600}
          className="w-full h-auto"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute top-[4%] left-[4%] w-[92.5%] h-[70%] object-cover"
        >
          <source src="/typing-main.mp4" type="video/mp4" />
        </video>
      </motion.div> */
}

//  <motion.div
//         variants={slideInFromRight(0.8)}
//         className="flex-1 flex justify-center items-center relative"
//       >
//         <Image
//           src="/monitor-frame.png"
//           alt="Monitor Screen"
//           width={2000}
//           height={1600}
//           className="w-full h-auto"
//         />
//         <video
//           autoPlay
//           muted
//           loop
//           className="absolute top-[7.5%] left-[4%] w-[91%] h-[75%] object-cover"
//         >
//           <source src="/typing-main.mp4" type="video/mp4" />
//         </video>
//       </motion.div>
