"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Users, Target, UsersRound, MapPin, 
  TrendingUp, Award, Globe, Heart, 
  Sparkles, ChevronRight, Clock,
  Star, Zap, Shield, Coffee
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
        const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
        const suffix = stat.number.replace(/[0-9]/g, '');
        let currentNumber = 0;
        
        intervals[index] = setInterval(() => {
          currentNumber += Math.ceil(targetNumber / 50);
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(intervals[index]);
          }
          setCountValues(prev => ({
            ...prev,
            [index]: currentNumber + suffix
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
      label: "Active Members", 
      description: "Passionate volunteers driving change across Bangladesh",
      icon: Users,
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      shadowColor: "shadow-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      delay: 0.1,
      trend: "+25% this year",
      trendIcon: TrendingUp
    },
    { 
      number: "12+", 
      rawNumber: 12,
      label: "Strategic Projects", 
      description: "Ongoing sustainable initiatives creating lasting impact",
      icon: Target,
      gradient: "from-orange-500 to-orange-600",
      lightGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.2,
      trend: "+3 new this quarter",
      trendIcon: Zap
    },
    { 
      number: "100K+", 
      rawNumber: 100000,
      label: "Lives Impacted", 
      description: "Positive community transformation through our programs",
      icon: UsersRound,
      gradient: "from-orange-500 to-amber-600",
      lightGradient: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0.3,
      trend: "Growing daily",
      trendIcon: Heart
    },
    { 
      number: "30+", 
      rawNumber: 30,
      label: "Districts Covered", 
      description: "National reach across Bangladesh with expanding presence",
      icon: MapPin,
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      shadowColor: "shadow-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      delay: 0.4,
      trend: "5 new districts in 2024",
      trendIcon: Globe
    },
  ];

  // Additional metrics for bottom bar
  const quickMetrics = [
    { label: "Years of Service", value: "15+", icon: Clock },
    { label: "Success Rate", value: "94%", icon: Star },
    { label: "Partner NGOs", value: "45", icon: Shield },
    { label: "Daily Volunteers", value: "500+", icon: Coffee },
  ];

  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header Section */}
        <div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
   

          {/* Main Heading with Gradient */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Numbers That
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>

          {/* Description with Decorative Elements */}
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
            <p className="text-gray-600 text-xl leading-relaxed">
              Every digit represents a milestone in our journey—a testament to our 
              <span className="text-orange-600 font-semibold"> commitment </span> 
              and the tangible impact we create across Bangladesh.
            </p>
          </div>


        </div>

        {/* Main Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trendIcon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: stat.delay }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    rotate: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Main Card */}
                <div className={`
                  relative bg-white rounded-3xl p-8 
                  border-2 ${stat.borderColor}
                  shadow-xl ${stat.shadowColor}
                  transition-all duration-500
                  ${isHovered ? 'transform -translate-y-2 shadow-2xl' : ''}
                  overflow-hidden
                `}>
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-orange-100 border-r-transparent"></div>
                  </div>

                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center relative z-10`}
                    >
                      <Icon className={`w-8 h-8 ${stat.iconColor}`} />
                    </motion.div>
                    
                    {/* Pulsing Background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className={`absolute inset-0 ${stat.iconBg} rounded-2xl blur-md`}
                    />
                  </div>

                  {/* Number with Animation */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: stat.delay + 0.3
                    }}
                    className="text-5xl md:text-6xl font-bold mb-3"
                  >
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {countValues[index] || stat.number}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {stat.description}
                  </p>

                  {/* Trend Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: stat.delay + 0.5 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <TrendIcon className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">{stat.trend}</span>
                  </motion.div>

                  {/* Animated Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: stat.delay + 0.4,
                      ease: "easeOut"
                    }}
                    className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-orange-200 to-orange-500"
                    style={{ width: isInView ? '100%' : 0 }}
                  />

                  {/* Hover Details Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-orange-50 to-transparent p-6 rounded-b-3xl pointer-events-none"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-600 font-medium">View detailed report</span>
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Floating Stats Cards */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 hidden xl:block">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white rounded-2xl shadow-2xl p-4 border border-orange-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Growth Rate</div>
                <div className="text-2xl font-bold text-gray-900">+156%</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden xl:block">
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="bg-white rounded-2xl shadow-2xl p-4 border border-amber-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Satisfaction</div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}