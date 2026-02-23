"use client";
import { useState } from "react";
import { Search, Heart, BookOpen, Briefcase, ArrowRight } from "lucide-react";

export default function OurVision() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const visionItems = [
    {
      title: "We Find & Fund",
      color: "bg-[#ff8c52]",
      lightColor: "bg-[#ffa875]",
      description: "We are in search of opportunities to help as many youth as possible. We approach and fund all those who are in need.",
      icon: Search,
      stats: "500+ Youth Funded",
      detail: "Identifying and supporting promising young leaders across communities"
    },
    {
      title: "We Provide Care",
      color: "bg-[#ff7a33]",
      lightColor: "bg-[#ff9a5c]",
      description: "Today's youth need a helpful hand and right guidance at every stage. Here's where we take care of them like our own.",
      icon: Heart,
      stats: "1000+ Under Our Care",
      detail: "Mentorship programs and emotional support for holistic development"
    },
    {
      title: "We Educate",
      color: "bg-[#ff6a14]",
      lightColor: "bg-[#ff8a3c]",
      description: "We run small-scale schools for the underprivileged children and youth of daily wage workers for a better future.",
      icon: BookOpen,
      stats: "5 Schools Established",
      detail: "Quality education for children of daily wage workers and marginalized communities"
    },
    {
      title: "We Employ",
      color: "bg-[#ff5a00]",
      lightColor: "bg-[#ff7a20]",
      description: "We run organizations where we employ youngsters so they can live their dreams for themselves and their families.",
      icon: Briefcase,
      stats: "200+ Jobs Created",
      detail: "Sustainable employment opportunities for youth to build independent futures"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80  rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className=" mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#ff5a00]">Vision</span>
          </h2>
          <p className="text-gray-600 text-lg mx-auto">
            Building a brighter future for youth through comprehensive support, education, and employment opportunities
          </p>
        </div>

        {/* Vision Blocks */}
        <div className="relative">
          {/* Decorative connecting lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5  -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {visionItems.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Main Card */}
                  <div
                    className={`
                      ${item.color} text-white p-8 h-full flex flex-col
                      transition-all duration-500 ease-out
                      ${isHovered ? 'transform scale-105 lg:scale-110 shadow-2xl z-10' : 'shadow-xl'}
                      ${index === 0 ? 'lg:rounded-l-2xl' : ''}
                      ${index === visionItems.length - 1 ? 'lg:rounded-r-2xl' : ''}
                      relative overflow-hidden
                    `}
                  >

                    {/* Icon with animated circle */}
                    <div className="relative mb-8">
                      <div className={`
                        absolute -inset-2 bg-white/20 rounded-full blur-xl
                        transition-all duration-500
                        ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
                      `}></div>
                      <div className={`
                        w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center
                        transition-all duration-500 relative
                        ${isHovered ? 'rotate-12 bg-white/30' : ''}
                      `}>
                        <Icon className={`w-8 h-8 text-white transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`} />
                      </div>
                    </div>

                    {/* Title with decorative line */}
                    <div className="relative mb-6">
                      <h3 className="text-2xl font-bold leading-tight mb-3">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-white/60 rounded-full transition-all duration-500 group-hover:w-20"></div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Stats with animation */}
                    <div className={`
                      mt-6 pt-6 border-t border-white/30
                      transition-all duration-500
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-80'}
                    `}>
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        {item.stats}
                      </span>
                    </div>

                    {/* Additional detail that appears on hover */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-4
                      transition-all duration-500 transform
                      ${isHovered ? 'translate-y-0' : 'translate-y-full'}
                    `}>
                      <p className="text-sm text-white flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        {item.detail}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white/20 border-r-transparent"></div>
                    </div>
                  </div>

                  {/* Mobile/Tablet decorative connector */}
                  {index < visionItems.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-orange-400">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff5a00]">500+</div>
            <div className="text-gray-600 mt-2">Youth Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff5a00]">5</div>
            <div className="text-gray-600 mt-2">Educational Centers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff5a00]">200+</div>
            <div className="text-gray-600 mt-2">Jobs Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff5a00]">1000+</div>
            <div className="text-gray-600 mt-2">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
}