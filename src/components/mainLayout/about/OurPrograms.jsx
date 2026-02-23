"use client";

import { Heart, GraduationCap, Users, Stethoscope } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education Support Program",
    description:
      "Providing educational materials, scholarships, and learning opportunities for underprivileged students across Bangladesh.",
  },
  {
    icon: Heart,
    title: "Food & Relief Program",
    description:
      "Distributing food packages and emergency relief to families in need during crises and natural disasters.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Initiative",
    description:
      "Organizing free medical camps, blood donation drives, and health awareness campaigns.",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "Empowering local communities through skill development, awareness programs, and volunteer engagement.",
  },
];

export default function OurPrograms() {
  return (
    <section className="pt-16 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-orange-600">Programs</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At OAB Foundation, we are dedicated to creating sustainable impact 
            through education, healthcare, relief support, and community empowerment.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:border-2 border-orange-600 transition duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600  group-hover:text-white transition">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}