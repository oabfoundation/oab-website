import React from "react";
import {
  HandHeart,
  GraduationCap,
  Scale,
  HeartPulse,
  Target,
  Leaf,
} from "lucide-react";
const WorkAreas = () => {
  return (
    <div className=" mt-16">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-orange-600">Programs</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At OAB Foundation, we are dedicated to creating sustainable impact
          through education, healthcare, relief support, and community
          empowerment.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Leaf className="h-7 w-7 text-primary-600" />,
            title: "Climate Action & Environment",
            description:
              "Raising awareness, training youth, and driving community-based solutions to fight climate change and protect our planet.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
          {
            icon: <HandHeart className="h-7 w-7 text-primary-600" />,
            title: "Women & Children Empowerment",
            description:
              "Ensuring rights, education, healthcare, and leadership opportunities for women and disadvantaged children.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
          {
            icon: <GraduationCap className="h-7 w-7 text-primary-600" />,
            title: "Education & Skill Development",
            description:
              "Equipping young people with knowledge, leadership skills, and capacity-building programs through the OAB Learning Academy.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
          {
            icon: <Scale className="h-7 w-7 text-primary-600" />,
            title: "Human Rights & Social Development",
            description:
              "Promoting equality, justice, and inclusive growth by uplifting marginalized communities.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
          {
            icon: <HeartPulse className="h-7 w-7 text-primary-600" />,
            title: "Health & Well-being",
            description:
              "Saving lives and improving health through the OAB Blood Bank, health campaigns, and awareness initiatives.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
          {
            icon: <Target className="h-7 w-7 text-primary-600" />,
            title: "Community Development",
            description:
              "Building sustainable communities through integrated development programs and grassroots initiatives.",
            color: "from-primary-50 to-primary-100 border-primary-100",
          },
        ].map((area, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 group`}
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {area.icon}
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-800">
              {area.title}
            </h3>
            <p className="text-gray-700">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkAreas;
