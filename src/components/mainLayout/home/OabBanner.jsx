"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OabBanner() {
  const images = [
    "https://i.ibb.co.com/jPWPzFNK/Whats-App-Image-2025-07-06-at-20-42-19-54a33708.jpg",
    "https://i.ibb.co.com/W40GY17T/Whats-App-Image-2025-07-06-at-20-42-21-2e43414e.jpg",
    "https://i.ibb.co.com/5xT2bQkZ/Whats-App-Image-2025-07-06-at-20-42-18-958b8491.jpg",
    "https://i.ibb.co.com/GzcTkMQ/Whats-App-Image-2025-07-06-at-20-42-18-95475630.jpg",
    "https://i.ibb.co.com/SXRtrsLP/Whats-App-Image-2025-07-06-at-20-42-20-5e3d1b7e.jpg.jpg",
    "https://i.ibb.co.com/MkZjkjrx/slider.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[300px] lg:h-[600px] relative overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">OAB Foundation</h1>

        <p className="max-w-2xl text-lg md:text-xl mb-6">
          We are committed to empowering communities through education,
          healthcare, and social support initiatives.
        </p>

        <Link href={"/about"}>
          <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
