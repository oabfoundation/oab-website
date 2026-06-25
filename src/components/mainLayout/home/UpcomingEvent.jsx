"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// --- Simple Countdown Logic ---
function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    if (!target) return;
    const timer = setInterval(() => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);
  return timeLeft;
}

export default function UpcomingEvent() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applied, setApplied] = useState(false);
  const countdown = useCountdown(event?.event_date);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upcoming-event`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(Array.isArray(data) ? data[0] : data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center animate-pulse text-orange-500 font-medium">
        Loading Event...
      </div>
    );
  if (!event) return null;

  const seatsLeft = event.seats_total - event.seats_taken;

  return (
    <section className="max-w-5xl mx-auto my-8 px-4 font-sans">
      <div className="relative z-10 bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-xl p-6 md:p-10 grid md:grid-cols-3 gap-8">
        {/* Left: Content */}
        <div className="md:col-span-2 space-y-5">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {event.category}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-800">
              {event.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
              <span>📅</span> {new Date(event.event_date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              <span>📍</span> {event.venue} ({event.format})
            </div>
            {event.certificate === "Yes" && (
              <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 text-emerald-700">
                <span>🎓</span> Certificate Provided
              </div>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {event.description}
          </p>

          {/* Countdown Blocks */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-tight">
              Event Starts In:
            </p>
            <div className="flex gap-3">
              {[
                { l: "Days", v: countdown.d },
                { l: "Hrs", v: countdown.h },
                { l: "Min", v: countdown.m },
                { l: "Sec", v: countdown.s },
              ].map((t) => (
                <div
                  key={t.l}
                  className="bg-white border border-orange-100 shadow-sm rounded-xl p-3 w-16 text-center"
                >
                  <div className="text-xl font-bold text-orange-600">
                    {String(t.v).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-tighter">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CTA & Stats */}
        <div className="bg-orange-50/50 rounded-2xl p-6 flex flex-col justify-between border border-orange-100">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">Fee</span>
              <span className="text-orange-600 font-bold text-lg">
                {event.fee === "0" ? "Free" : `৳ ${event.fee}`}
              </span>
            </div>
{/* 
            <div className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Seats Availability</span>
                <span className="font-bold text-gray-700">
                  {event.seats_taken}/{event.seats_total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{
                    width: `${(event.seats_taken / event.seats_total) * 100}%`,
                  }}
                ></div>
              </div>
            </div> */}

            <div className="pt-2 space-y-2">
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Deadline</span>
                <span className="text-red-500 font-semibold">
                  {new Date(event.apply_deadline).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Ends At</span>
                <span className="text-gray-700">
                  {new Date(event.end_date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            <div className="h-[1px] bg-orange-200 w-full my-1" />
            <p className="text-[12px] text-gray-500 italic text-center">
              Only {seatsLeft} seats remaining!
            </p>
          </div>

          <Link
            href={event.registerLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setApplied(true)}
            className={`w-full mt-6 inline-flex items-center justify-center py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all transform active:scale-95 shadow-lg ${
              applied
                ? "bg-emerald-500 text-white"
                : "bg-orange-600 hover:bg-orange-700 text-white hover:shadow-orange-200"
            }`}
          >
            {applied ? "✓ Redirecting..." : "Register Now"}
          </Link>
        </div>
      </div>
    </section>
  );
}
