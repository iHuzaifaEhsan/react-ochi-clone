import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="bg-zinc-900">
      <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]">
        <div className="text overflow-hidden border-t-2 gap-10 border-b-2 border-zinc-300 flex whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[20vw] leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold uppercase pt-10 -mb-[4vw]"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[20vw] leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold uppercase pt-10 -mb-[4vw]"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
