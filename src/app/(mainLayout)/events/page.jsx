import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    title: "Winter Blanket Distribution Program 2025",
    date: "15 January 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "OAB Foundation successfully reached underprivileged families across several districts to provide warmth during the winter season.",
    category: "Impact",
  },
  {
    title: "Free Medical Camp Successfully Completed",
    date: "02 February 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "Our medical team provided essential healthcare services, screenings, and free medicine to rural communities in need.",
    category: "Healthcare",
  },
  {
    title: "Ramadan Food Package Initiative",
    date: "10 March 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "Preparing for the holy month by ensuring that families have access to nutritious food and essential supplies.",
    category: "Humanitarian",
  },
  // ... baki data gulu thakbe
];

const Events = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Latest from the{" "}
            <span className="text-orange-500">OAB Foundation</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in sharing our journey with you. Stay updated with our
            ongoing programs, recent successes, and upcoming humanitarian
            efforts.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                  <Calendar size={14} className="text-orange-500" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors group/btn"
                  >
                    Read Story
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1"
          >
            View All Updates
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
