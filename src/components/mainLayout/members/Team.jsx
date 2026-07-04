"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Globe, Facebook } from "lucide-react";
import ImageWithFallback from "@/components/common/ImageWithFallback";

const Team = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const response = await fetch("/api/board-of-director");
        const data = await response.json();
        setUserData(data.data || data || []);
      } catch (error) {
        console.error("Error fetching board members:", error);
      }
    };

    fetchBoardMembers();
  }, []);

  const iconMap = {
    github: <Github size={24} />,
    linkedin: <Linkedin size={24} />,
    twitter: <Twitter size={24} />,
    facebook: <Facebook size={24} />,
    website: <Globe size={24} />,
  };

  return (
    <div className="py-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Board of Director
        </h2>
        <p className="text-lg text-gray-600">
          Meet the talented individuals driving our success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {userData.map((member) => (
              <div
                key={member._id}
                className="bg-white border border-slate-100 hover:border-slate-300 transition-colors rounded-xl p-5"
              >
                <ImageWithFallback
                  width={100}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="h-[clamp(180px,50vw,245px)] w-full object-cover object-top rounded-lg"
                />
                <h3 className="text-base font-medium text-slate-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-600 mt-0.5">{member.designation}</p>
                {/* Social Links */}
                <div className="flex gap-5 mt-4">
                  {member.socials && Object.entries(member.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-400 transition-all duration-200 hover:-translate-y-1"
                    >
                      {iconMap[platform] || <Globe size={24} />}
                    </a>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Team;
