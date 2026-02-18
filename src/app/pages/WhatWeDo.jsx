"use client";
import { useState, useEffect } from "react";

export default function WhatWeDo() {
  const activities = [
    {
      title: "Global Awareness",
      description:
        "Raising awareness on social issues and supporting community development worldwide.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/585547898_773797205713209_2086703403857651539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=FBPv6pbqsTMQ7kNvwEHNXpG&_nc_oc=Adnaj_EZJUFPOywG2p7_Q5TSyyoqVmxc_m0kUe39h6JHaWK6RofKdJwbApDZyZhyhw0&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=v3mNZgEZ6DW_oEgv13Nv2g&oh=00_Afsdat3CaQyX6WD7RAMogXJi9E6e103YbgO93i3s5W-Rpg&oe=699B3F7C",
    },
    {
      title: "Environmental Care",
      description:
        "Initiatives for tree planting, cleanups, and promoting sustainable practices.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586580035_773198792439717_8799031615448267473_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c5n831YlUKYQ7kNvwFq59bO&_nc_oc=AdknAXNEqNhvRBXZjAFQLco3D8Q0Y6zwA_cse60QE3_lNOKVr7OBH6w8TynFXSUN0Us&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=Ie2RLFuZFuz4TSutgeuKtA&oh=00_Afs01eDE2IdU39bUa7bDzAHBQQUgeEH3en0JumQjKKhRmA&oe=699B1905",
    },
    {
      title: "Local Support",
      description:
        "Helping underprivileged communities through education, healthcare, and vocational training.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/588082512_773207012438895_1549455216234678607_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UbGLSE-LUx8Q7kNvwHRQlMu&_nc_oc=AdlvGlB7rbnUKIiDDUnSysMTJ0KTeQfVScWrXfp-vWOt71AMO9Kk20UesIbkkFYmeaM&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=vvIy0x4jaypIkP19a1wtHg&oh=00_AfvedkzGE6r0JUbRvXTj1NMta_9r2toGognfJQDyxPJSZw&oe=699B144E",
    },
    {
      title: "Timely Aid",
      description:
        "Providing emergency relief and support during natural disasters and crises.",
      image:
        "https://scontent.fjsr8-2.fna.fbcdn.net/v/t39.30808-6/588644969_773199602439636_9123994642976234420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=CJ84tya2N1kQ7kNvwEkJzPJ&_nc_oc=AdmDFPR-kcBssZz_zSi53Wiyu2fXJ6IpakKqZDbvhWHW0w6ujkE912nuLTJAJOiIOAo&_nc_zt=23&_nc_ht=scontent.fjsr8-2.fna&_nc_gid=Xx7wG4EjP3qCXfLSG4E7-w&oh=00_Afu6YBFgjH29RKQl2Uqb7tPunQ78V3HkXlQ1bNgxoQBgbg&oe=699B1E1A",
    },
    {
      title: "Youth Empowerment",
      description:
        "Creating programs that train and inspire the next generation of leaders.",
      image:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/586010250_773197842439812_10146339817349920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Cx9aDp2cfkUQ7kNvwFB27RA&_nc_oc=AdlmVEQb0Sw_rH8VDLuP2pWCTz5JDwQ5AfPgZ0dw0_xDfAAl0UKGJxnDj4aas5Uebf0&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=v2MqgPCZrrO_vltDohwpkA&oh=00_AfsKbJo5hmAZdZ-cX50izdc8dq1iAnlDDiFSDaJo04aOmA&oe=699B3C2D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % activities.length);
    }, 3000); // 3 sec por next item

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[600px] py-5 flex items-center justify-center relative overflow-hidden">
       
      {activities.map((activity, index) => (
        <div
          key={index}
          className={`
            flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-12
            absolute inset-0 transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          {/* Left: Text */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-6xl font-bold mb-4 text-orange-800">{activity.title}</h2>
            <p className="text-gray-600 text-lg">{activity.description}</p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
