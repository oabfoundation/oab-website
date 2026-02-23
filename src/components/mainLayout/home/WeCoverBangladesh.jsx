"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  MapPin,
  Users,
  Building,
  Globe,
  ChevronRight,
  Award,
  Target,
} from "lucide-react";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Loading map of Bangladesh...</p>
      </div>
    </div>
  ),
});

export default function WeCoverBangladesh() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [stats, setStats] = useState({
    totalDistricts: 64,
    activePrograms: 128,
    beneficiaries: "2.5M+",
    partners: 45,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample district data (you can expand this)
  const districts = [
    {
      name: "Dhaka",
      programs: 25,
      beneficiaries: "500K+",
      color: "bg-orange-500",
    },
    {
      name: "Chittagong",
      programs: 18,
      beneficiaries: "350K+",
      color: "bg-orange-500",
    },
    {
      name: "Rajshahi",
      programs: 15,
      beneficiaries: "280K+",
      color: "bg-orange-500",
    },
    {
      name: "Khulna",
      programs: 12,
      beneficiaries: "220K+",
      color: "bg-orange-500",
    },
    {
      name: "Sylhet",
      programs: 10,
      beneficiaries: "180K+",
      color: "bg-orange-500",
    },
    {
      name: "Barisal",
      programs: 8,
      beneficiaries: "150K+",
      color: "bg-orange-500",
    },
    {
      name: "Rangpur",
      programs: 14,
      beneficiaries: "260K+",
      color: "bg-orange-500",
    },
    {
      name: "Mymensingh",
      programs: 11,
      beneficiaries: "200K+",
      color: "bg-orange-500",
    },
  ];

  return (
    <div ref={sectionRef} className="relative px-4 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 "></div>
        <div className="absolute bottom-0 right-0 w-full h-64 "></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            We Cover <span className="text-orange-600">Bangladesh</span>
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Operating across all 64 districts with comprehensive programs
            touching lives in every corner of the country
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6  transition-all duration-300 text-center group hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalDistricts}
            </div>
            <div className="text-gray-600 text-sm">Districts Covered</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.activePrograms}
            </div>
            <div className="text-gray-600 text-sm">Active Programs</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.beneficiaries}
            </div>
            <div className="text-gray-600 text-sm">Lives Impacted</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.partners}
            </div>
            <div className="text-gray-600 text-sm">Partner Organizations</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold text-gray-700">
                      Interactive Coverage Map
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      Active Areas
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                      Expanding Soon
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <LeafletMap
                  onDistrictHover={setHoveredDistrict}
                  onDistrictClick={setSelectedDistrict}
                />

                {/* Map Overlay Info */}
                {hoveredDistrict && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-orange-200">
                    <p className="text-sm font-medium text-gray-700">
                      Hovering:{" "}
                      <span className="text-orange-600">{hoveredDistrict}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Selected District Info */}
            <div className="bg-white rounded-2xl  p-6 ">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                {selectedDistrict ? selectedDistrict : "Select a District"}
              </h3>

              {selectedDistrict ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-600">Active Programs:</span>
                    <span className="font-bold text-orange-600">24</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-600">Beneficiaries:</span>
                    <span className="font-bold text-orange-600">50,000+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-600">Partner NGOs:</span>
                    <span className="font-bold text-orange-600">8</span>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-[#ff5a00] to-[#ff8c52] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                    View Details
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Click on any district on the map to see detailed information
                  about our programs and impact.
                </p>
              )}
            </div>

            {/* District List */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Key Districts
              </h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {districts.map((district, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-orange-50 rounded-lg cursor-pointer transition-all duration-200 group"
                    onMouseEnter={() => setHoveredDistrict(district.name)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    onClick={() => setSelectedDistrict(district.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 ${district.color} rounded-full`}
                      ></div>
                      <span className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                        {district.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {district.programs} programs
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
