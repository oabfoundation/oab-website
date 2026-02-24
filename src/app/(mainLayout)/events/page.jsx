"use client";

import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getEvents } from "@/app/api/events/route";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from server
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getEvents();
        if (res.success) {
          setEvents(res.data);
        } else {
          console.error("Failed to fetch events:", res.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading events...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest <span className="text-orange-600">Events</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-lg md:text-xl text-gray-600">
            We believe in sharing our journey with you. Stay updated with our
            ongoing programs, recent successes, and upcoming humanitarian efforts.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-60 w-full overflow-hidden">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-400 rounded-t-2xl">
                    No Image
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                    {event.category || "Event"}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                  <Calendar size={14} className="text-orange-500" />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {event.desc || event.longDesc || "No description available."}
                </p>

                {/* Read More Button */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/events/${event._id}`}
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors group/btn"
                  >
                    Read More
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

        {/* Optional: Center View All Button */}
        {/* <div className="flex justify-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1"
          >
            View All Updates
            <ArrowRight size={18} />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Events;