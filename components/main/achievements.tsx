"use client";

import { ACHIEVEMENTS } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Achievements = () => {
  return (
    <section
      id="achievements"
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
          Achievements
        </h1>
        <p className="text-gray-400 mt-4 max-w-[600px]">
          Recognition for my problem-solving skills and open-source contributions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-10">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                {achievement.title}
              </h3>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {achievement.description}
            </p>
            <a
              href={achievement.link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
            >
              View Profile
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
