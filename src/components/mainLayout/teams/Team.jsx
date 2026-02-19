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
      name: "Mohyminul Islam",
      role: "Software Developer",
      college: "Khulna Polytechnic Institute",
      session: "2021 - 2025",
      bio: "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
      photo: "https://i.ibb.co.com/1fydPrDG/munna.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/mohyminul/",
        facebook: "https://www.facebook.com/mohyminul",
        twitter: "https://x.com/mohyminulislam_",
      },
    },
    {
      name: "Arnob Das",
      role: "Content Creator",
      college: "Khulna Polytechnic Institute",
      session: "2021 - 2025",
      bio: "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
      photo: "https://i.ibb.co.com/6cQdw0bH/arnob.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Jubayer Ahmed",
      role: "Media Manager",
      college: "Khulna Polytechnic Institute",
      session: "2021 - 2025",
      bio: "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
      photo: "https://i.ibb.co.com/SDNcLxKB/Jubayer-Ahmed.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Mahinur Rahman",
      role: "Media Manager",
      college: "Dhaka Polytechnic Institute",
      session: "2022 - 2026",
      bio: "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
      photo: "https://i.ibb.co.com/WNwk9v4C/Mahinur-Rahman.jpg",
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
    <div className="mt-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Team</h2>
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
            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>

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

            <div className="flex items-center gap-3 text-left bg-slate-50 p-3 rounded-2xl my-2 w-full">
              <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors">
                <GraduationCap className="text-orange-500 group-hover:text-white size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700 leading-tight">
                  {user.college}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Session: {user.session}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
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
                  className="text-indigo-600 hover:text-indigo-400 transition-all duration-200 hover:-translate-y-1"
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
