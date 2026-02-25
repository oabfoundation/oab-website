"use client";
import React, { useState, useEffect } from "react";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("");

  const quotes = [
    "Small steps lead to big changes. Let's make an impact today!",
    "Your leadership is driving the OAB Foundation forward.",
    "Every decision you make helps someone in need. Keep going!",
    "Success is the sum of small efforts, repeated day in and day out.",
  ];

  useEffect(() => {
    // Set greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Set random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <section className="p-8 mt-20 min-h-[200px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden">
          <LayoutDashboard className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-50 opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-orange-600 mb-2">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {greeting}, Admin
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Welcome Back to{" "}
              <span className="text-orange-600">OAB Dashboard</span>
            </h1>

            {quote && (
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed italic border-l-4 border-orange-500 pl-4 bg-orange-50/50 py-2 rounded-r-lg">
                "{quote}"
              </p>
            )}

            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium">
                <TrendingUp size={16} className="text-orange-500" />
                <span>Foundation is growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;