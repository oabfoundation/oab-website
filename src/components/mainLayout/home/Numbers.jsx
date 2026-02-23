"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  Target,
  UsersRound,
  MapPin,
  TrendingUp,
  Globe,
  Heart,
  Zap,
} from "lucide-react";

export default function Numbers() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [countValues, setCountValues] = useState({});

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Simulate counting animation for numbers
      const intervals = {};
      stats.forEach((stat, index) => {
        const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ""));
        const suffix = stat.number.replace(/[0-9]/g, "");
        let currentNumber = 0;

        intervals[index] = setInterval(() => {
          currentNumber += Math.ceil(targetNumber / 50);
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(intervals[index]);
          }
          setCountValues((prev) => ({
            ...prev,
            [index]: currentNumber + suffix,
          }));
        }, 30);
      });

      return () => Object.values(intervals).forEach(clearInterval);
    }
  }, [isInView, controls]);

  const stats = [
    {
      number: "14K",
      rawNumber: 14000,
      label: "Active Volunteers",
      description:
        "Passionate volunteers driving meaningful change across Bangladesh",
      icon: Users,
      gradient: "from-orange-500 to-orange-600",
      lightGradient: "from-orange-50 to-orange-50",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.1,
      trend: "+25% this year",
      trendIcon: TrendingUp,
    },
    {
      number: "12+",
      rawNumber: 12,
      label: "Strategic Projects",
      description:
        "Ongoing sustainable initiatives successfully creating lasting impact",
      icon: Target,
      gradient: "from-orange-500 to-orange-600",
      lightGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.2,
      trend: "+3 new this quarter",
      trendIcon: Zap,
    },
    {
      number: "100K+",
      rawNumber: 100000,
      label: "Lives Impacted",
      description: "Positive community transformation through our programs",
      icon: UsersRound,
      gradient: "from-orange-500 to-orange-600",
      lightGradient: "from-orange-50 to-orange-50",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.3,
      trend: "Growing daily",
      trendIcon: Heart,
    },
    {
      number: "30+",
      rawNumber: 30,
      label: "Districts Covered",
      description: "National reach across Bangladesh with expanding presence",
      icon: MapPin,
      gradient: "from-orange-500 to-orange-600",
      lightGradient: "from-orange-50 to-orange-50",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.4,
      trend: "5 new districts in 2024",
      trendIcon: Globe,
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative " ref={containerRef}>
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Numbers That <span className="text-orange-600">Speak Volumes</span>
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every digit represents a milestone in our journey—a testament to our
            <span className="text-orange-600 font-semibold"> commitment </span>
            and the tangible impact we create across Bangladesh.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trendIcon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: stat.delay }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Main Card */}
                <div
                  className={`
                  relative bg-white rounded-3xl p-8 
                  border-2 ${stat.borderColor}
                  shadow-xl ${stat.shadowColor}
                  transition-all duration-500
                  ${isHovered ? "transform -translate-y-2 shadow-2xl" : ""}
                  overflow-hidden
                `}
                >
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-orange-100 border-r-transparent"></div>
                  </div>

                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <div
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center relative z-10`}
                    >
                      <Icon className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                  </div>

                  {/* Number with Animation */}
                  <div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: stat.delay + 0.3,
                    }}
                    className="text-5xl md:text-6xl font-bold mb-3"
                  >
                    <span
                      className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      {countValues[index] || stat.number}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {stat.description}
                  </p>

                  {/* Trend Indicator */}
                  <div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: stat.delay + 0.5 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <TrendIcon className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-600 font-medium">
                      {stat.trend}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
