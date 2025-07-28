
"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailsubmitted, setemailsubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      if (resData.status === 200) {
        setemailsubmitted(true);
        e.target.reset(); 
        setTimeout(() => setemailsubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-3 my-12 py-24 gap-6 relative px-4 md:px-12 text-white"
    >
      {/* LEFT COLUMN */}
      <motion.div
        className="md:col-span-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h5 className="text-2xl font-bold my-2">Let’s Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md leading-relaxed">
          I’m actively exploring full-time roles, internships, and freelance
          opportunities. Let’s collaborate and build something great together.
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <Link href="https://github.com/yuvk018" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="GitHub"
              width={35}
              height={35}
              className="invert"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yuvraj-mehta1/"
            target="_blank"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="Linkedin"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </motion.div>

      {/* VERTICAL DIVIDER */}
      <div className="hidden md:flex justify-center items-center">
        <div className="h-full w-px bg-[#33353F]" />
      </div>

      {/* RIGHT COLUMN */}
      <motion.div
        className="md:col-span-1 bg-[#0F1115]/60 backdrop-blur-md p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form
          className="flex flex-col"
          onSubmit={handlesubmit}
          autoComplete="off"
        >
          <label htmlFor="email" className="text-sm mb-2 font-medium">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] rounded-lg p-2.5 mb-4 text-sm"
            placeholder="your.email@example.com"
          />

          <label htmlFor="subject" className="text-sm mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] rounded-lg p-2.5 mb-4 text-sm"
            placeholder="Hiring Opportunity / Collaboration"
          />

          <label htmlFor="message" className="text-sm mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] rounded-lg p-2.5 mb-4 text-sm"
            placeholder="Hi Yuvraj, I'm reaching out regarding..."
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 transition-all font-medium text-white py-2.5 px-5 rounded-lg w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                Sending...
              </>
            ) : (
              "Send Mail"
            )}
          </button>

          {emailsubmitted && (
            <motion.p
              className="text-green-400 mt-4 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Email sent successfully!
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSection;

