"use client";

import {
  HandCoins,
  Users,
  HeartHandshake,
  Share2,
  ArrowRight,
} from "lucide-react";

const waysToHelp = [
  {
    icon: HandCoins,
    title: "Make a Donation",
    description:
      "Your financial contribution helps us support education, healthcare, and relief initiatives.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Become a Volunteer",
    description:
      "Join our volunteer team and actively participate in community development programs.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: HeartHandshake,
    title: "Partner With Us",
    description:
      "Collaborate with OAB Foundation to create sustainable and meaningful impact.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    description:
      "Help raise awareness by sharing our mission and initiatives within your network.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function HowYouCanHelp() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            How You Can <span className="text-orange-600">Help</span>
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            There are several ways you can contribute to OAB Foundation and
            become part of positive change. Every effort counts.
          </p>
        </div>

        {/* Grid Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToHelp.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300 ${item.color}`}
                >
                  <Icon size={28} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Simple Action Link */}
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 group-hover:gap-3 transition-all">
                  Get Started <ArrowRight size={14} />
                </button>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-16 h-16 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
