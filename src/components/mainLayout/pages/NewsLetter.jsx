"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Future: Connect with API / Email service
    console.log("Subscribed:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className=" bg-orange-300 text-orange-500-content">
        
      {/* Orange CTA Section */}
      <div className="bg-[#FF6B00] py-20 px-4 text-center text-white">
        <p className="uppercase tracking-widest text-xs mb-6 font-semibold">
          Give Us A Hand
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
          Support us and change the course of a child's life today!
        </h2>
        <button className="text-white bg-orange-900 px-10 py-3 font-bold text-sm tracking-widest uppercase rounded transition-colors">
          Donate
        </button>
      </div>
    </section>
  );
}