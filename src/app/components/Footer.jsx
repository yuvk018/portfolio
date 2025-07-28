
"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-20 px-6 py-10 border-t border-[#33353F] text-[#ADB7BE] text-sm text-center"
    >
      <p className="text-white font-semibold mb-2">What Drives Me</p>
      <p className="mb-4">
        I’m passionate about building tech that solves real problems and
        learning from every challenge I face.
      </p>

      

      <p className="text-[#5C6370] text-s italic">
        Thanks for scrolling this far — let’s build something impactful
        together.
      </p>
    </motion.footer>
  );
};

export default Footer;
