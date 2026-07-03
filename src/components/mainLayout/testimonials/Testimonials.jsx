"use client";

import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.data || data || []))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const renderStars = (rating) => {
    if (!rating) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-slate-800 text-center">
        Testimonials
      </h1>
      <p className="text-slate-500 text-center">
        What people say about our organization
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-white border border-slate-100 hover:border-slate-300 transition-colors rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/56?text=No+Image";
                  }}
                />
              )}
              <div className="flex-1">
                <p className="text-lg font-semibold text-slate-800">{testimonial.name}</p>
                {testimonial.designation && (
                  <p className="text-sm text-orange-600 font-medium">{testimonial.designation}</p>
                )}
                {testimonial.rating && (
                  <div className="flex gap-0.5 mt-1">{renderStars(testimonial.rating)}</div>
                )}
              </div>
            </div>
            
            <div className="relative">
              <Quote className="w-8 h-8 text-orange-200 absolute -top-2 -left-2" />
              <p className="text-slate-600 text-sm leading-relaxed pl-4">
                {testimonial.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
