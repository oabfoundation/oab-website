"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Volunteer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Application submitted successfully! Our team will contact you soon.");
    setFormData({ name: "", email: "", phone: "", reason: "" });
    setIsSubmitting(false);
  };

  const benefits = [
    "Develop Leadership & Strategic Skills",
    "Direct Contribution to Community Growth",
    "Access to Global Networking Opportunities",
    "Official Recognition & Certification",
  ];

  return (
    <section className="relative pb-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Value Proposition */}
        < div 
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            Empower Change <br />
            <span className="text-orange-600 underline decoration-orange-200 underline-offset-8">With Us.</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
            Impact lives across Bangladesh by lending your skills and passion. 
            We bridge the gap between volunteers and communities in need through structured, high-impact programs.
          </p>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              < div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
            
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-orange-200 transition-colors"
              >
                <CheckCircle2 className="text-orange-500 w-6 h-6 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 font-medium leading-tight">{benefit}</span>
              </ div>
            ))}
          </div>
        </ div>

        {/* Right Side: Professional Form Card */}
        <div 
          initial={{ opacity: 0, scale: 0.95 }}
          className="relative"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-1  rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Volunteer Application</h3>
            <p className="text-slate-500 text-sm mb-8">Fields marked with * are required.</p>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_12px_50px_rgba(255,165,0,0.35)] hover:shadow-[0_16px_60px_rgba(255,165,0,0.45)] transition-shadow duration-500">
  <form onSubmit={handleSubmit} className="space-y-6">
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
        <input
          required
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter a valid email"
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 ml-1">Statement of Purpose *</label>
      <textarea
        required
        name="reason"
        rows={4}
        value={formData.reason}
        onChange={handleChange}
        placeholder="Tell us about your motivation and skills..."
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 resize-none"
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="group w-full py-4 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
    >
      {isSubmitting ? (
        <Loader2 className="animate-spin" size={20} />
      ) : (
        <>
          <span>Submit Application</span>
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </button>
  </form>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;