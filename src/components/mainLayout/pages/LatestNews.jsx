"use client";

import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Image from "next/image";

const newsData = [
  {
    title: "Winter Blanket Distribution Program 2025",
    date: "15 January 2026",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/638123380_842613028831626_5423169794063755824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qYbiOO0YH3wQ7kNvwHGg5cI&_nc_oc=Adkuyx998KiL132CUSCApstWGV4vsRV7BnoTbEWTd1SGsMbwp4isq_FcUrGYrCPyJKo&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=Bd2heAvzSKgZgyRcRGKVYA&oh=00_Afuzibd0vIaQ_6tlTU80zPKeCPLD6BbupymPo5bn-vUI9A&oe=699DF8F7",
    desc: "OAB Foundation successfully reached underprivileged families across several districts to provide warmth during the winter season.",
    category: "Impact",
  },
  {
    title: "Free Medical Camp Successfully Completed",
    date: "02 February 2026",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/638123380_842613028831626_5423169794063755824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qYbiOO0YH3wQ7kNvwHGg5cI&_nc_oc=Adkuyx998KiL132CUSCApstWGV4vsRV7BnoTbEWTd1SGsMbwp4isq_FcUrGYrCPyJKo&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=Bd2heAvzSKgZgyRcRGKVYA&oh=00_Afuzibd0vIaQ_6tlTU80zPKeCPLD6BbupymPo5bn-vUI9A&oe=699DF8F7",
    desc: "Our medical team provided essential healthcare services, screenings, and free medicine to rural communities in need.",
    category: "Healthcare",
  },
  {
    title: "Ramadan Food Package Initiative",
    date: "10 March 2026",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/638123380_842613028831626_5423169794063755824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qYbiOO0YH3wQ7kNvwHGg5cI&_nc_oc=Adkuyx998KiL132CUSCApstWGV4vsRV7BnoTbEWTd1SGsMbwp4isq_FcUrGYrCPyJKo&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=Bd2heAvzSKgZgyRcRGKVYA&oh=00_Afuzibd0vIaQ_6tlTU80zPKeCPLD6BbupymPo5bn-vUI9A&oe=699DF8F7",
    desc: "Preparing for the holy month by ensuring that families have access to nutritious food and essential supplies.",
    category: "Humanitarian",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
    
            <h2 className="text-4xl font-bold tracking-tight text-base-content">
              Latest from the <span className="text-orange-500">OAB Foundation</span>
            </h2>
            <p className="mt-4 text-base-content/60 leading-relaxed">
              We believe in sharing our journey with you. Stay updated with our 
              ongoing programs, recent successes, and upcoming humanitarian efforts.
            </p>
          </div>
          <button className="hidden md:flex btn btn-ghost p-2 text-white rounded-2xl bg-orange-500 hover:bg-orange-500/5 items-center gap-2">
            View all updates <ArrowRight size={18} />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl hover:border-2 border-orange-500 flex flex-col bg-transparent transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-base-content/40 uppercase tracking-widest mb-3">
                  <Calendar size={14} className="text-orange-500/60" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed mb-6 line-clamp-2">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-orange-500 group/link">
                    Read Story
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 md:hidden">
          <button className="btn btn-primary bg-orange-500 text-white p-2 btn-wide rounded-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}