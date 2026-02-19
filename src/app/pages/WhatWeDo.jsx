"use client";
import { useState, useEffect } from "react";

export default function WhatWeDo() {
  const activities = [
    {
      title: "Global Awareness",
      description:
        "Raising awareness on social issues and supporting community development worldwide through advocacy campaigns and cross-cultural partnerships.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/585547898_773797205713209_2086703403857651539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=FBPv6pbqsTMQ7kNvwEHNXpG&_nc_oc=Adnaj_EZJUFPOywG2p7_Q5TSyyoqVmxc_m0kUe39h6JHaWK6RofKdJwbApDZyZhyhw0&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=v3mNZgEZ6DW_oEgv13Nv2g&oh=00_Afsdat3CaQyX6WD7RAMogXJi9E6e103YbgO93i3s5W-Rpg&oe=699B3F7C",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Environmental Care",
      description:
        "Leading initiatives for tree planting, ocean cleanups, and promoting sustainable practices to protect our planet for future generations.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586580035_773198792439717_8799031615448267473_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c5n831YlUKYQ7kNvwFq59bO&_nc_oc=AdknAXNEqNhvRBXZjAFQLco3D8Q0Y6zwA_cse60QE3_lNOKVr7OBH6w8TynFXSUN0Us&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=Ie2RLFuZFuz4TSutgeuKtA&oh=00_Afs01eDE2IdU39bUa7bDzAHBQQUgeEH3en0JumQjKKhRmA&oe=699B1905",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Local Support",
      description:
        "Empowering underprivileged communities through accessible education, healthcare services, and vocational training programs.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/588082512_773207012438895_1549455216234678607_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UbGLSE-LUx8Q7kNvwHRQlMu&_nc_oc=AdlvGlB7rbnUKIiDDUnSysMTJ0KTeQfVScWrXfp-vWOt71AMO9Kk20UesIbkkFYmeaM&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=vvIy0x4jaypIkP19a1wtHg&oh=00_AfvedkzGE6r0JUbRvXTj1NMta_9r2toGognfJQDyxPJSZw&oe=699B144E",
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Timely Aid",
      description:
        "Delivering emergency relief and critical support to communities affected by natural disasters and humanitarian crises.",
      image:
        "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/588644969_773199602439636_9123994642976234420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=CJ84tya2N1kQ7kNvwEkJzPJ&_nc_oc=AdmDFPR-kcBssZz_zSi53Wiyu2fXJ6IpakKqZDbvhWHW0w6ujkE912nuLTJAJOiIOAo&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=Xx7wG4EjP3qCXfLSG4E7-w&oh=00_Afu6YBFgjH29RKQl2Uqb7tPunQ78V3HkXlQ1bNgxoQBgbg&oe=699B1E1A",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Youth Empowerment",
      description:
        "Nurturing future leaders through mentorship programs, leadership workshops, and skill development initiatives.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586010250_773197842439812_10146339817349920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Cx9aDp2cfkUQ7kNvwFB27RA&_nc_oc=AdlmVEQb0Sw_rH8VDLuP2pWCTz5JDwQ5AfPgZ0dw0_xDfAAl0UKGJxnDj4aas5Uebf0&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=v2MqgPCZrrO_vltDohwpkA&oh=00_AfsKbJo5hmAZdZ-cX50izdc8dq1iAnlDDiFSDaJo04aOmA&oe=699B3C2D",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % activities.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activities.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((index) => (index - 1 + activities.length) % activities.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((index) => (index + 1) % activities.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };



  return (
    <section className="w-full min-h-[700px]  pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What We Do
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 -ml-6 lg:-ml-12"
            aria-label="Previous slide"
          >
            ←
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 -mr-6 lg:-mr-12"
            aria-label="Next slide"
          >
            →
          </button>

          {/* Slides Container */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
            {activities.map((activity, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  className={`
                    absolute inset-0 transition-all duration-700 ease-in-out
                    ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
                  `}
                >
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-90 mix-blend-multiply z-10`}></div>
                  
                  {/* Background Image */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
                      <div className="max-w-2xl text-white">
                   
                        
                        {/* Title */}
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 transform transition-all duration-700 delay-500">
                          {activity.title}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed transform transition-all duration-700 delay-700">
                          {activity.description}
                        </p>
                        
                        {/* CTA Button */}
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${index === currentIndex 
                    ? "w-10 h-3 bg-orange-500" 
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute bottom-24 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg hover:bg-white transition-all duration-300 z-30"
          >
            {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
          </button>
        </div>

      </div>
    </section>
  );
}