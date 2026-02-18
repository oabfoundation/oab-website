"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, UsersRound, MapPin } from "lucide-react";

export default function Numbers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const stats = [
    { 
      number: "14K", 
      label: "Our Active Members", 
      description: "Passionate volunteers driving change",
      icon: Users,
      gradient: "from-primary-500 to-primary-500",
      delay: 0.1
    },
    { 
      number: "12+", 
      label: "Strategic Projects", 
      description: "Ongoing sustainable initiatives",
      icon: Target,
      gradient: "from-primary-500 to-primary-500",
      delay: 0.2
    },
    { 
      number: "100,000+", 
      label: " Live Impactes", 
      description: "Positive community transformation",
      icon: UsersRound,
      gradient: "from-primary-500 to-primary-500",
      delay: 0.3
    },
    { 
      number: "30+", 
      label: "Districts Covered", 
      description: "National reach across Bangladesh",
      icon: MapPin,
      gradient: "from-primary-500 to-primary-500",
      delay: 0.4
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center py-2 rounded-full"
            >
              <span className="text-2xl font-semibold text-orange-600 tracking-wide uppercase">
                Our Impact Metrics
              </span>
            </motion.div>

            {/* Main Heading with Decorative Line */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Numbers That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                  Speak Volumes
                </span>
              </h2>
              
            
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Every digit represents a milestone in our journey—a testament to our 
              commitment and the tangible impact we create across Bangladesh. 
              We measure success not just in numbers, but in lives transformed.
            </motion.p>

          </motion.div>

          {/* Right Stats - Enhanced */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
        
                  
                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-sm group-hover:shadow-2xl transition-all duration-300">
                    
               
                    {/* Number with Counting Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: stat.delay + 0.2
                      }}
                      className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {stat.description}
                    </p>

                    {/* Animated Progress Bar */}
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: stat.delay + 0.3,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}