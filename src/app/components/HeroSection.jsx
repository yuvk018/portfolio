
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion"; 

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <motion.div
          className="col-span-7 place-self-center text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white font-extrabold text-4xl mb-4 sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Yuvraj Mehta",
                1000,
                "🚀 Web Developer",
                1000,
                "🎨 UI/UX Designer",
                1000,
                "💻 Frontend Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-5xl sm:text-6xl font-bold 
               text-white 
               animate-pulse 
               drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
            />
          </h1>
          <p className="text-[#B0B0B0] text-base sm:text-xl mb-6 lg:text-xl mt-8">
            A passionate Web Developer specializing in building modern,
            responsive, and high-performance web applications. With expertise in
            Next.js, MERN and Tailwind CSS, I create sleek and functional user
            interfaces that enhance user experience. Explore my work below and
            feel free to get in touch!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#contact"
              scroll={true}
              className="relative px-6 py-3 rounded-full bg-transparent text-white w-full sm:w-fit border border-white hover:bg-slate-800 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 blur-lg transition-all duration-500 group-hover:opacity-100"></span>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              download="Yuvraj_CV.pdf"
              className="relative px-6 py-3 rounded-full bg-transparent text-white w-full sm:w-fit border border-white hover:bg-slate-800 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 blur-lg transition-all duration-500 group-hover:opacity-100"></span>
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="col-span-5 place-self-center mt-4 lg:mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#181818] shadow-2xl shadow-purple-500/30">
            <Image
              src="/Images/my1.png"
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


  