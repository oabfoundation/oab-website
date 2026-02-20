"use client";

import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Asaduzzaman Tohin",
    role: "Founder & President",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Faisal Tahsan",
    role: "Head of HR",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Md. Hasan",
    role: "Lead, IT Team",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Forhad Hossain",
    role: "Graphics & Video Team",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Farhana Alam Jesy",
    role: "Climate Action Team",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Adib Imam",
    role: "HR Team",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Moymuna Rahman",
    role: "Women’s Team",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  {
    name: "Rakib Mridha",
    role: "Campus Ambassador Coordinator",
    image: "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/627683049_830889133337349_6161829453600216088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X0xgKK55GHoQ7kNvwHIpmAl&_nc_oc=Adm--EAPRcJ5_h8PZ0iZGkrAzNdi0NcR7VRhL-4xq2L4_OIhIi1M6TuGf-98NhUhDCc&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=3XFHwFDkISF7ljzl41SeVQ&oh=00_Aft4RYUBMtX7n-KMlaB8ru9hzmOwydaL8VhPjig_zB3AZA&oe=699E1AEE",
  },
  // {
  //   name: "Nasim Limon",
  //   role: "Convenor Committee",
  //   image: "/leaders/nasim.jpg",
  // },
];

export default function Leadership() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="">Leadership</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the passionate leaders guiding OAB Foundation toward sustainable impact and community empowerment.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:border-2 border-orange-500 hover:shadow-xl transition duration-300 text-center overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />

                {/* Social Icons Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a href="#" className="bg-white p-2 rounded-full">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-orange-600 text-sm mt-1">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}