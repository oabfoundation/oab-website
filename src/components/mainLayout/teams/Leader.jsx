import { Linkedin, Mail } from "lucide-react";
import React from "react";
const leaders = [
  {
    name: "Asaduzzaman Tohin",
    role: "Founder & President",
    image: "https://i.ibb.co.com/FL92nkZy/Tuhin.png",
  },
  {
    name: "Rakib Hossain",
    role: "Head of Finance",
    image: "https://i.ibb.co.com/9HzRLnDB/Rakib.jpg",
  },
  {
    name: "Mohyminul Islam",
    role: "Lead, IT Team",
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
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="">Leaders</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the passionate leaders guiding OAB Foundation toward
            sustainable impact and community empowerment.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:border-2 border-orange-500 hover:shadow-xl transition duration-300 text-center overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />

                {/* Social Icons Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a href="#" className="bg-white p-2 rounded-full">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-orange-600 text-sm mt-1">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leader;
