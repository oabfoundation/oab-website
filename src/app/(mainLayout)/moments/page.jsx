import React from 'react';
import { Calendar, MapPin, Award, Star, Clock, User, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Leaders' Special Moments Dummy Data
const momentsData = [
  {
    id: 1,
    name: "Mohyminul Islam",
    role: "Our Web Developer",
    title: "Birampur General Olympiad-2026",
    description: "Leadership is not about standing on the stage, it’s about working among the people.",
    events: "Birampur General Olympiad-2026",
    dateAndTime: "May 26, 2026 • 10:30 AM",
    location: "Birampur, Bangladesh",
    image: "https://i.ibb.co.com/hJwmwM9J/mohyminulislam.jpg",
    link: "mmmmmmmmm"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Director of International Relations",
    title: "MOU Signing Ceremony with Ivy League",
    description: "A historic moment as Sarah signs a direct student exchange reference agreement, opening new horizons for South Asian scholars.",
    events: "Strategic Partnership Alliance",
    dateAndTime: "Jan 22, 2026 • 02:15 PM",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    link: "mmmmmmmmm"
  },
  {
    id: 3,
    name: "Prof. Rafiqul Islam",
    role: "Head Advisory Board",
    title: "Lifetime Achievement in Education Mentorship",
    description: "Receiving the prestigious Excellence in Mentorship Crest for outstanding contribution to student reference framework validation.",
    events: "OAB Gala Night & Excellence Awards",
    dateAndTime: "May 08, 2026 • 07:00 PM",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    link: "mmmmmmmmm"
  }
];

export default function SpecialMoments() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/40 to-slate-50 text-slate-800 antialiased">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden py-24 text-white text-center px-4">
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-semibold tracking-wider uppercase border border-orange-500/30 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-orange-400" /> Executive Highlights
          </span>
          <h1 className="text-4xl md:text-6xl text-black">
            Special Moments
          </h1>
          <p className="text-base md:text-lg text-black max-w-xl mx-auto font-light leading-relaxed">
            Celebrating the milestones, breakthroughs, and proudest moments of our leadership team charting paths worldwide.
          </p>
        </div>
      </section>

      {/* Moments List Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 space-y-16">
        {momentsData.map((moment, index) => (
          <div 
            key={moment.id}
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image / Media Container (Left/Right Alternative) */}
            <div className="w-full lg:w-1/2 group relative rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 h-[350px] lg:h-auto min-h-[350px]">
              <img 
                src={moment.image} 
                alt={moment.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              
              {/* Event Badge Floating on Image */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-orange-100 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
                <span>{moment.events}</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between p-2">
              <div className="space-y-4">
                
                {/* Meta details: Time & Place */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-orange-600 tracking-wide uppercase">
                  <span className="flex items-center gap-1 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100/50">
                    <Clock className="w-3.5 h-3.5" /> {moment.dateAndTime}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" /> {moment.location}
                  </span>
                </div>

                {/* Title and Main Description */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
                    {moment.title}
                  </h2>
                  <i className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
                    {moment.description}
                  </i>
                </div>

                {/* Divider */}
                <hr className="border-slate-200/80" />

                {/* Leader Profile / Bio Section */}
                <div className="bg-white p-4 rounded-xl border border-orange-100/40 shadow-sm flex items-start gap-3.5">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-600 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{moment.name}</h4>
                    <p className="text-xs text-orange-600 font-medium mb-1.5">{moment.role}</p>
                  </div>
                </div>

              </div>

              {/* Bottom Interactive Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 cursor-pointer group/btn">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-orange-500" /> Highlight Verified Case
                </span>
                <Link href={moment.link} className="flex items-center gap-0.5 text-slate-900 group-hover/btn:text-orange-600 transition-colors">
                  Explore Event <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Bottom Footer Section */}
      <footer className="bg-white py-12 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          Shaping the future through strong values & unforgettable corporate milestones.
        </p>
      </footer>

    </div>
  );
}