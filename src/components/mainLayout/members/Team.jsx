import React from "react";
import { Github, Linkedin, Twitter, Globe, Facebook } from "lucide-react";
import Image from "next/image";

const Team = () => {
  const userData = [
    {
      id: 1,
      name: "Asaduzzaman Tohin",
      role: "Founder & President",
      bio: "Together we learn, lead, and grow—only through collective participation can we build a sustainable and equitable future.",
      photo: "https://i.ibb.co.com/RGX6BtR2/Tuhin.webp",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      name: "Md Rakib Uddin",
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
            {userData.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-slate-100 hover:border-slate-300 transition-colors rounded-xl p-5"
              >
                <Image
                  width={100}
                  height={100}
                  src={member.photo}
                  alt={member.name}
                  className="h-[clamp(180px,50vw,245px)] w-full object-cover object-top rounded-lg"
                />
                <h3 className="text-base font-medium text-slate-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-600 mt-0.5">{member.role}</p>
                {/* Social Links */}
                <div className="flex gap-5 mt-4">
                  {Object.entries(member.socials).map(([platform, url]) => (
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
