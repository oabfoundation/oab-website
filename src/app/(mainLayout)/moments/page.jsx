import React from "react";
import { MapPin, Award, Clock, User, Heart } from "lucide-react";
import { collection, dbConnect } from "@/app/lib/dbConnect";

export const revalidate = 30;

async function getMoments() {
  try {
    const MomentsCollection = await dbConnect(collection.MOMENTS);
    const result = await MomentsCollection.find({})
      .sort({ createdAt: 1 })
      .toArray();
    return result.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      createdAt: doc.createdAt ? doc.createdAt.toISOString() : null,
    }));
  } catch (error) {
    console.error("Error fetching moments:", error);
    return [];
  }
}

export default async function SpecialMoments() {
  const moments = await getMoments();
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/40 to-slate-50 text-slate-800 antialiased">
      {/* Hero Header */}
      <section className="py-10 text-black text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-800 text-white text-sm font-medium border border-orange-500/30 mb-4 backdrop-blur-sm">
            <Award className="w-4 h-4 text-white" /> Executive Highlights
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-black bg-clip-text text-transparent">
            Special Moments
          </h1>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Celebrating the milestones, breakthroughs, and proudest moments of
            our leadership team charting paths worldwide.
          </p>
        </div>
      </section>

      {/* Moments List Section */}
      <section className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {moments.length > 0 ? (
          moments.map((moment, index) => (
            <div
              key={moment._id}
              className={`flex flex-col lg:flex-row gap-8 items-stretch ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />{" "}
                      {moment.location}
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
                      <h4 className="text-sm font-bold text-slate-900">
                        {moment.name}
                      </h4>
                      <p className="text-xs text-orange-600 font-medium mb-1.5">
                        {moment.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 cursor-pointer group/btn">
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-orange-500" /> Highlight
                    Verified Case
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500">No moments yet.</p>
          </div>
        )}
      </section>

      {/* Bottom Footer Section */}
      <footer className="bg-white py-12 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          Shaping the future through strong values & unforgettable corporate
          milestones.
        </p>
      </footer>
    </div>
  );
}
