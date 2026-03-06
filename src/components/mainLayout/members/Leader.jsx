import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const leaders = [
  {
    name: "MD.Shahanur Alam",
    role: "Co-Lead, Program & Logistics",
    image: "https://i.ibb.co.com/0j6NxHVW/Shahanur.png",
  },
  {
    name: "Hasi Akter Sumaiya",
    role: "Co Lead, Program Department",
    image: "https://i.ibb.co.com/hxrmsyL2/hasi.jpg",
  },
  {
    name: "Mohyminul Islam",
    role: "Software Developer",
    image: "https://i.ibb.co.com/rGxhTTRq/20251226-114756.jpg",
  },
  {
    name: "Forhad Hossain",
    role: "Graphics & Video Team",
    image: "https://i.ibb.co.com/wrRyFVhX/user.png",
  },
];

const Leader = () => {
  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Our <span className="text-orange-600">Leaders</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Meet the passionate leaders guiding OAB Foundation toward sustainable
          impact and community empowerment.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-300 text-center overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={300}
                src={leader.image}
                alt={leader.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105 overflow-hidden"
              />

              {/* Social Icons Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                {leader.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leader;
