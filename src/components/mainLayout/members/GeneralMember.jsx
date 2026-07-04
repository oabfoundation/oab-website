"use client";
import React, { useEffect, useState } from "react";

const GeneralMember = () => {
  const [members, setMembers] = useState([]);
  const fallback = "https://i.ibb.co.com/p6Ds2H8S/IMG-20241121-WA0048.jpg";

  const isValidUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/");
  };

  useEffect(() => {
    fetch("/api/general-member")
      .then((res) => res.json())
      .then((data) => setMembers(data.data || data || []));
  }, []);

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-slate-800 text-center">
        Our General Member
      </h1>
      <p className="text-slate-500 text-center">
        The people behind the member, passionate about what they do.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 mt-12 px-4"
      >
        {members.map((member) => (
          <div
            key={member._id}
            className="max-w-80 w-full bg-black text-white rounded-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={isValidUrl(member.image) ? member.image : fallback}
                alt={member.name}
                className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                onError={(e) => {
                  e.target.src = fallback;
                }}
              />
              <div className="absolute bottom-0 z-10 h-10 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
            </div>
            <div className="px-4 pb-6 text-center">
              <p className="mt-4 text-lg">{member.name}</p>
              <p className="text-sm font-bold bg-[#E0724A] text-transparent bg-clip-text uppercase tracking-wide">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralMember;
