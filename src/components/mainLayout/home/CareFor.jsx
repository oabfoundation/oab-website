"use client";
import React, { useState } from "react";
import { Leaf, GraduationCap, Heart, Recycle, ArrowRight } from "lucide-react";
import Image from "next/image";
import BottomToTop from "@/components/framer motion/BottomToTop";

export default function WhatWeCareFor() {
  const [hoveredId, setHoveredId] = useState(null);

  const careItems = [
    {
      id: 1,
      title: "Protecting the Planet",
      subtitle: "Preserving Our Future",
      icon: Leaf,
      description:
        "At OAB Foundation, we believe that caring for the environment is not just a responsibility—it’s a necessity.As climate change threatens the well-being of millions, especially in vulnerable regions like Bangladesh, we take meaningful action to raise awareness, build resilience, and inspire sustainable living.Our initiatives include large-scale tree-planting drives, clean-up campaigns, youth climate education, and community-based environmental projects.We engage local voices, support eco-friendly solutions, and promote behavioral change that respects the balance of nature.By nurturing a deeper connection between people and the planet, we work every day to ensure a healthier, greener future for all.",
      image:
        "https://i.ibb.co.com/3xXtVXb/pngtreeprotecting-planet-together.webp",
      stats: "10,000+ Trees Planted",

      reverse: false,
      achievements: ["Tree Plantation", "Climate Awareness", "Eco Education"],
    },
    {
      id: 2,
      title: "Lighting the Path",
      subtitle: "of Knowledge for Every Child",
      icon: GraduationCap,
      description:
        "we believe education is every child’s right, not a privilege.We work to ensure that children—especially from underserved communities—have access to quality learning, safe classrooms, and the tools they need to succeed.Through school programs, educational support, and awareness campaigns, we are building a future where no child is left behind.",
      image:
        "https://i.ibb.co.com/MyH6VC7z/stop.webp",
      stats: "5,000+ Children Educated",

      reverse: true,
      achievements: ["School Programs", "Digital Learning", "Teacher Training"],
    },
    {
      id: 3,
      title: "Ending Violence",
      subtitle: "Restoring Dignity",
      icon: Heart,
      description:
        "OAB Foundation stands against all forms of violence and abuse toward women.We work to raise awareness, provide support,and empower survivors to reclaim their voice and dignity.Through education, advocacy, and community outreach, we challenge harmful norms and promote a culture of respect and safety.We believe every woman deserves to live free from fear, with equal rights and protection.Together, we are building a society where women are safe, valued, and empowered.",
      image:
        "https://i.ibb.co.com/8gb46Kqp/Ending-Violence.webp",
      stats: "2,500+ Women Empowered",

      reverse: false,
      achievements: ["Legal Aid", "Counseling", "Awareness Campaigns"],
    },
    {
      id: 4,
      title: "Say No to Plastic",
      subtitle: "Say Yes to the Planet",
      icon: Recycle,
      description:
        "Plastic pollution is one of the most pressing environmental threats we face today. At OAB Foundation, we are committed to reducing plastic waste and protecting our environment for future generations.We organize clean-up drives, awareness campaigns, and educational programs to help communities understand the dangers of single-use plastics.By promoting eco-friendly alternatives and sustainable habits, we encourage people to reduce, reuse, and rethink plastic use in daily life. Together, we’re working toward a cleaner, greener, and plastic-free Bangladesh.",
      image:
        "https://i.ibb.co.com/wFhWgnc0/Say-No-to-Plastic.webp",
      stats: "50+ Clean-up Drives",

      reverse: true,
      achievements: [
        "Plastic-Free Zones",
        "Recycling Programs",
        "Eco Alternatives",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-600",
        light: "bg-orange-100",

        dark: "bg-orange-600",
      },
      blue: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-600",
        light: "bg-orange-100",

        dark: "bg-orange-600",
      },
      red: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-600",
        light: "bg-orange-100",

        dark: "bg-orange-600",
      },
      purple: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-600",
        light: "bg-orange-100",

        dark: "bg-orange-600",
      },
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="py-20">
      <BottomToTop>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What We <span className="text-orange-600">Care For</span>
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Committed to creating sustainable change through environmental
            protection, education, and social justice.
          </p>
        </div>
      </BottomToTop>
      {/* Cards */}
      <BottomToTop>
        <div className="space-y-16 md:space-y-24">
          {careItems.map((item) => {
            const colors = getColorClasses(item.color);
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-transparent group-hover:border-orange-500 transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={768}
                        height={1024}
                        className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90 group-hover:contrast-125"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                          {item.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-5">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {item.title}
                    <span className="block text-xl md:text-2xl font-normal text-gray-600 mt-1">
                      {item.subtitle}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </BottomToTop>
    </div>
  );
}
