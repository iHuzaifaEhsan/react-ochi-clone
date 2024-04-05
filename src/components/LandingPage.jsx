import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["we create", "eye-opening", "presentations"].map((items, index) => {
          return (
            <>
              <div className="masker">
                <div className="w-fit flex">
                  {index === 1 && (
                    <motion.div
                    style={{backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")`,}}
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] h-[5.7vw] -top-[0.2vw] relative bg-slate-400 rounded-md bg-cover bg-center"
                  ></motion.div>
                  )}
                  <motion.h1
                    key={index}
                    className="uppercase text-[9vw] relative top-[0.8vw] leading-[7.5vw] text-white font-bold font-['Founders_Grotesk_X_Condensed']"
                  >
                    {items}
                  </motion.h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none "
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 uppercase border-[2px] border-zinc-500  rounded-full cursor-pointer text-md captalize font-light">
            start the project
          </div>
          <div className="w-10 h-10 upper rounded-full border-[1px] flex items-center justify-center border-zinc-400 rounded-full cursor-pointer">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
