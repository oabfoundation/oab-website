"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Handshake, 

} from "lucide-react";

export default function OurPartners() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const partners = [
    {
      name: "Global Platform Bangladesh",
      logo: "https://i.ibb.co.com/bjZCW092/Screenshot-2026-02-11-152156.png",
      type: "Strategic Alliance",
      color: "from-primary-600 to-primary-500"
    },
    {
      name: "Development Partner",
      logo: "https://i.ibb.co.com/SDBggh5Q/Screenshot-2026-02-11-152207.png",
      type: "Development",
      color: "from-primary-600 to-primary-500"
    },
    {
      name: "Corporate Sponsor",
      logo: "https://i.ibb.co.com/Pvqq0j32/Screenshot-2026-02-11-152214.png",
      type: "Corporate",
      color: "from-primary-600 to-primary-500"
    },
    {
      name: "Government Agency",
      logo: "https://i.ibb.co.com/xSt99wfx/Screenshot-2026-02-11-152222.png",
      type: "Government",
      color: "from-primary-600 to-primary-500"
    },
    {
      name: "International NGO",
      logo: "https://i.ibb.co.com/N62HCVvR/Screenshot-2026-02-11-152229.png",
      type: "International",
      color: "from-rprimary-600 to-primary-500"
    },
    {
      name: "Academic Institution",
      logo: "https://i.ibb.co.com/9ktYLy9X/Screenshot-2026-02-11-152235.png",
      type: "Academic",
      color: "from-primary-600 to-primary-500"
    },
  ];


  return (
    <section className="relative overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        {/* Header Section */}
        <div className="text-center mb-10">


          <h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Valued{" "}
            <span className="text-primary-600">
              Partners
            </span>
          </h2>

          <p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Through strategic alliances and collaborative efforts, we amplify our impact 
            and drive sustainable change across Bangladesh and beyond.
          </p>

        
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
           <img src={partner?.logo} alt={partner?.name} className=" object-contain w-2xl h-2xl" />
           </div>
          ))}
        </div>

      </div>
    </section>
  );
}