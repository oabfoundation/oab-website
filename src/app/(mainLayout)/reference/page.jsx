import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, ChevronRight, BookOpen, Quote } from 'lucide-react';

// 3 Students Data Object in English
const students = [
  {
    id: 1,
    name: "Mohammad Rashed",
    destination: "University of Toronto, Canada",
    program: "M.Sc. in Data Science",
    session: "Fall 2025",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    quote: "Achieving this milestone would have been impossible without the proper guidance and strong reference from the OAB Foundation. They made the complex funding process smooth and hassle-free.",
    achievement: "100% Graduate Fellowship"
  },
  {
    id: 2,
    name: "Nusrat Jahan Ani",
    destination: "Monash University, Australia",
    program: "Bachelor of Software Engineering",
    session: "Spring 2026",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    quote: "From university selection to visa processing—the mentors at OAB Foundation supported me like family at every single step of my global higher education journey.",
    achievement: "Vice-Chancellor's Scholarship"
  },
  {
    id: 3,
    name: "Arifur Rahman",
    destination: "Technical University of Munich, Germany",
    program: "M.Sc. in Automotive Engineering",
    session: "Winter 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "OAB's official reference letter immensely strengthened my profile when submitting my block account statements and university applications in Germany.",
    achievement: "DAAD Scholarship Holder"
  }
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-orange-50/30 text-slate-800 antialiased">
      {/* Eye-catching Hero Section with Orange Accent */}
      <section className="relative overflow-hidden bg-gradient-to-br bg-orange-600 py-20 text-white text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-800 text-white text-sm font-medium border border-orange-500/30 mb-4 backdrop-blur-sm">
            <Award className="w-4 h-4 text-white" /> Global Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-white bg-clip-text text-transparent">
            Global Achievements via OAB Foundation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet our brilliant students who successfully moved abroad for higher education with our dedicated mentorship and verified institutional references.
          </p>
        </div>
      </section>

      {/* Main Content Layout - Stacked Row Layout (Image Left, Content Right) */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        {students.map((student) => (
          <div 
            key={student.id} 
            className="bg-white rounded-2xl shadow-xl shadow-orange-900/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-orange-100 overflow-hidden group flex flex-col md:flex-row"
          >
            {/* LEFT SIDE: Image Component (Takes full width on mobile, fixed/proportional width on desktop) */}
            <div className="relative w-full md:w-2/5 min-h-[260px] md:min-h-full bg-slate-100 overflow-hidden">
              <img 
                src={student.image} 
                alt={student.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent"></div>
              
              {/* Floating Scholarship Badge */}
              <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm bg-orange-600/90 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {student.achievement}
              </div>
            </div>

            {/* RIGHT SIDE: Information & Content */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Header Information */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-sm font-semibold text-orange-600 tracking-wide uppercase mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {student.destination}
                  </p>
                </div>

                {/* Program & Session Pill Box */}
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/70 flex flex-wrap gap-y-2 gap-x-6 items-center mb-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <GraduationCap className="w-4.5 h-4.5 text-orange-600" />
                    <span>{student.program}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium md:border-l md:border-orange-200 md:pl-5">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{student.session}</span>
                  </div>
                </div>

                {/* English Quote from Student */}
                <div className="relative pt-1 pl-6">
                  <Quote className="absolute top-0 left-0 w-5 h-5 text-orange-300 transform rotate-180" />
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{student.quote}"
                  </p>
                </div>
              </div>

              {/* Action/Verification Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                <span className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md">
                  <BookOpen className="w-3.5 h-3.5" /> Reference Verified by OAB
                </span>
                <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform cursor-pointer">
                  View Success Story <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Orange Themed Call to Action Footer */}
      <footer className="text-center py-12 bg-white border-t border-orange-100">
        <p className="text-base text-slate-600 max-w-md mx-auto px-4">
          Want to build your global career through OAB Foundation's authentic references? 
          <a href="#" className="block md:inline-block text-orange-600 font-bold md:ml-1.5 hover:underline mt-2 md:mt-0">
            Contact Our Mentors Now &rarr;
          </a>
        </p>
      </footer>
    </div>
  );
}