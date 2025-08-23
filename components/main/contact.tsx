"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 min-h-screen"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Contact Me
        </h1>
        <p className="text-gray-400 text-lg max-w-[700px] mx-auto">
          Let&apos;s connect! Feel free to reach out for collaborations or opportunities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-10 mx-auto">
        {/* Email */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-8 text-center group bg-[#030014]/50 backdrop-blur-sm"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
          <p className="text-gray-300 text-base mb-6">sankarasettyabhiram@gmail.com</p>
          <a
            href="mailto:sankarasettyabhiram@gmail.com"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-base font-semibold px-6 py-3 rounded-lg hover:bg-[#2A0E61]/30"
          >
            Send Email
            <svg
              className="w-5 h-5 ml-2"
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

        {/* LinkedIn */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-8 text-center group bg-[#030014]/50 backdrop-blur-sm"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <FaLinkedin className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">LinkedIn</h3>
          <p className="text-gray-300 text-base mb-6">Connect professionally</p>
          <a
            href="https://linkedin.com/in/abhiram-sankarasetty"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-base font-semibold px-6 py-3 rounded-lg hover:bg-[#2A0E61]/30"
          >
            Connect
            <svg
              className="w-5 h-5 ml-2"
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

        {/* GitHub */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 p-8 text-center group bg-[#030014]/50 backdrop-blur-sm"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <FaGithub className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">GitHub</h3>
          <p className="text-gray-300 text-base mb-6">View my projects</p>
          <a
            href="https://github.com/abhiramsankarasetty"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-base font-semibold px-6 py-3 rounded-lg hover:bg-[#2A0E61]/30"
          >
            Visit Profile
            <svg
              className="w-5 h-5 ml-2"
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
      </div>
    </section>
  );
};
