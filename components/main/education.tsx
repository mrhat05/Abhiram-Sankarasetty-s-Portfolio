"use client";

import { EDUCATION } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Education
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px]">
          My academic journey and achievements
        </p>
      </motion.div>

      <div className="max-w-4xl w-full px-10">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.institution}
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-6 mb-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-purple-400 font-medium">{edu.degree}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.dates}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {edu.location}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
