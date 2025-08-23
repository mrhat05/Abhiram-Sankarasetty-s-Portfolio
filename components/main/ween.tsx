"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Ween = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            WEEN
          </span>{" "}
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">

          <Image
            src="/ween.png"
            alt="Lock main"
            width={500}
            height={500}
            className="z-10"
          />
        </div>

      </div>

      <div className="absolute z-[20] mt-48 px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          From where you are to who you want to be
        </div>
      </div>
    </div>
  );
};
