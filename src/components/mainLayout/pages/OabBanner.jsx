"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OabBanner() {
  const images = [
    "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586686534_775405122219084_5071147784462562877_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=GSd3-4zJUqoQ7kNvwHAWoKq&_nc_oc=AdlaKRfTLPalfiobBJJMRiH519XlThsnfRzAuQcs3RwYno2N4hDxKZ-qFnzoJQVQSqY&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gw55KbqcH5gtho3UScFrtw&oh=00_Afv_zLhmHbEj4U6wl9SbNP4S7opnb2mR6HWp-pyqUyZP_A&oe=699B1AD0",
    "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/590413058_775405262219070_7390255668878487402_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=MmXljRezGFEQ7kNvwFZ0-tJ&_nc_oc=AdnCroAow3vU7vyitQHjYIFSojtR3vLwIFUzqlxVOSLCKnPfio1E5i0X3_LpqXw3RbA&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=WY6VzvV4xLERYKWXddDVoQ&oh=00_AftT-wY0p4UDPOcNYHRSsUsh9zJpmsoFJvTW9ZPVrtS4DQ&oe=699B2EF5",
    "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/588648582_776287865464143_4788365472075557294_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_y6IKIMLFv0Q7kNvwG58okj&_nc_oc=Adkxd52Ox0LeGothOSZx40CmoRKxlzVHnl448xeWoJnULs-AkVKM1NV7vWP_qqDc_QA&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=HncUhWjzDH5dPRz50iA4uQ&oh=00_AfsQByYs0Mc8BJQEyXppjIS1g77AVX2rQDdsP59_fwGzmg&oe=699B0AB4",
    "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586340068_776288025464127_1321977308777794459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OKbdfYMx7tYQ7kNvwFWLBcn&_nc_oc=AdncLk-4ftJWS7vJNZQSargUe49FYExyyEvrXiaoEslANGkuAamwHyDXlxDKnRyHZqs&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=_f5fMoTKKCoIoaKckPEnAg&oh=00_AfuLRiGGrWWUIxoGgkLhptp-CcW70fpM1rB8xgBBHKBrmA&oe=699B3439"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[600px] relative overflow-hidden">
      
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          OAB Foundation
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-6">
          We are committed to empowering communities through education,
          healthcare, and social support initiatives.
        </p>

     <Link href={'/about'}>
        <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold transition">
          Learn More
        </button></Link>
      </div>
    </section>
  );
}
