"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function MissionVision() {
  const missionImages = [
    "https://i.ibb.co.com/1fS6bTsd/mission-3.jpg",
    "https://i.ibb.co.com/GvtcVnbV/mission-2.jpg",
    "https://i.ibb.co.com/60K0XGT1/mission-1.jpg",
  ];

  const visionImages = [
    "https://i.ibb.co.com/0RTYkk58/vision-3.jpg",
    "https://i.ibb.co.com/pBwFwjx8/vision-2.jpg",
    "https://i.ibb.co.com/TMB79wpP/vision-1.jpg",
  ];

  const features = [
    "We Find & Fund",
    "We Provide Care",
    "We Educate",
    "We Employ",
  ];

  return (
    <div className="mt-20 space-y-32 overflow-hidden">
      {/* Our Mission */}
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Text Side */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-50 px-3 py-1 rounded-full">
            Our Purpose
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
            Our <span className="text-orange-600">Mission</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            To create skilled citizens by empowering disadvantaged children,
            youth and women’s communities and raising awareness among people to
            ensure effective workforce and leadership, real education and the
            elimination of social inequality, climate change and injustice.
          </p>

          <ul className="grid grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-800 font-medium"
              >
                <CheckCircle2 className="text-orange-500 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            width={500}
            height={300}
            src={missionImages[0]}
            alt="Mission Main"
            className="w-full h-72 md:h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="flex gap-4">
            <Image
              width={500}
              height={300}
              src={missionImages[1]}
              alt="Mission Small 1"
              className="w-1/2 h-40 md:h-48 object-cover rounded-3xl shadow-lg"
            />
            <Image
              width={500}
              height={300}
              src={missionImages[2]}
              alt="Mission Small 2"
              className="w-1/2 h-40 md:h-48 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
        {/* Text Side */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-50 px-3 py-1 rounded-full">
            Our Dream
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
            Our <span className="text-orange-600">Vision</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            We want a sustainable, non-discriminatory society where everyone is
            able to fulfill their highest potential and a green world full of
            vibrant people.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-800 font-medium"
              >
                <CheckCircle2 className="text-orange-500 w-5 h-5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            width={500}
            height={300}
            src={visionImages[0]}
            alt="Vision Main"
            className="w-full h-72 md:h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="flex gap-4">
            <Image
              width={500}
              height={300}
              src={visionImages[1]}
              alt="Vision Small 1"
              className="w-1/2 h-40 md:h-48 object-cover rounded-3xl shadow-lg"
            />
            <Image
              width={500}
              height={300}
              src={visionImages[2]}
              alt="Vision Small 2"
              className="w-1/2 h-40 md:h-48 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
