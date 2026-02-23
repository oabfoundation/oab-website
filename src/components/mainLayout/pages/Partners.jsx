"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurPartners() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const partners = [
    {
      name: "Global Platform Bangladesh",
      logo: "https://i.ibb.co.com/bjZCW092/Screenshot-2026-02-11-152156.png",
    },
    {
      name: "Development Partner",
      logo: "https://i.ibb.co.com/SDBggh5Q/Screenshot-2026-02-11-152207.png",
    },
    {
      name: "Corporate Sponsor",
      logo: "https://i.ibb.co.com/Pvqq0j32/Screenshot-2026-02-11-152214.png",
    },
    {
      name: "Government Agency",
      logo: "https://i.ibb.co.com/xSt99wfx/Screenshot-2026-02-11-152222.png",
    },
    {
      name: "International NGO",
      logo: "https://i.ibb.co.com/N62HCVvR/Screenshot-2026-02-11-152229.png",
    },
    {
      name: "Academic Institution",
      logo: "https://i.ibb.co.com/9ktYLy9X/Screenshot-2026-02-11-152235.png",
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 bg-white">
      <div className="relative " ref={containerRef}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Valued <span className="text-orange-600">Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Through strategic alliances and collaborative efforts, we amplify
            our impact and drive sustainable change across Bangladesh and
            beyond.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full h-24 flex items-center justify-center grayscale-0 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
              <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
