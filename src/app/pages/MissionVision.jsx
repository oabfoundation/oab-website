"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
      
      {/* Our Mission */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To create skilled citizens by empowering disadvantaged children, youth and women’s communities
            and raising awareness among people to ensure effective workforce and leadership, real education
            and the elimination of social inequality, climate change and injustice.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/mnt/data/08f7e10d-7d8e-4f9e-aed0-1886900d1499.png"
            alt="Our Mission"
            className="rounded-xl w-full object-cover shadow-md"
          />
        </motion.div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We want a sustainable, non-discriminatory society where everyone
            is able to fulfill their highest potential and a green world full
            of vibrant people.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/mnt/data/08f7e10d-7d8e-4f9e-aed0-1886900d1499.png"
            alt="Our Vision"
            className="rounded-xl w-full object-cover shadow-md"
          />
        </motion.div>
      </div>

    </section>
  );
}
