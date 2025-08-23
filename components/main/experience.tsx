"use client";

import { EXPERIENCE } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
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
          Experience
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px]">
          My roles and contributions in organizations
        </p>
      </motion.div>

      <div className="max-w-4xl w-full px-10">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.title}
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-6 mb-6"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-purple-400 font-medium mb-2">
                  {exp.organization}
                </p>
                <p className="text-gray-400 text-sm">{exp.dates}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-medium mb-2">Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
