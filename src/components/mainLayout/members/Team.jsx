import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  GraduationCap,
  Facebook,
} from "lucide-react";
import Image from "next/image";

const Team = () => {
  const userData = [
    {
      name: "Md Akash Hossain",
      role: "Founding Member",
      bio: "Innovation, dedication, and compassion are the keys to driving meaningful change in society.",
      photo: "https://i.ibb.co.com/Wpjxgrbq/Md-Akash-Hossain.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/",
        facebook: "https://www.facebook.com/",
        twitter: "https://x.com",
      },
    },
    {
      name: "Asaduzzaman Tohin",
      role: "Founder & President",
      bio: "Together we learn, lead, and grow—only through collective participation can we build a sustainable and equitable future.",
      photo: "https://i.ibb.co.com/VcYDBpzV/Tuhin.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Md MInhajul Islam",
      role: "Founding Member",
      bio: "When we empower others, we empower ourselves—collective action shapes a brighter future.",
      photo: "https://i.ibb.co.com/m5BBV3pm/mihaj.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Rakib Hossain",
      role: "Head of Finance",
      bio: "Together we learn, lead, and grow—only through collective participation can we build a sustainable and equitable future.",
      photo: "https://i.ibb.co.com/9HzRLnDB/Rakib.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

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
        {userData.map((user, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col items-center text-center group"
          >
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-gray-50 shadow-lg">
              <Image
                width={100}
                height={100}
                src={user.photo}
                alt={user.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              {user.name}
            </h2>
            <p className="text-orange-600 font-medium ">{user.role}</p>

            <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-4">
              {user.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-auto">
              {Object.entries(user.socials).map(([platform, url]) => (
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
