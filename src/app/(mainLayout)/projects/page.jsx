import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// export const metadata = {
//   title: "Our Projects & Impact",
//   description:
//     "Explore OAB Foundation's nationwide initiatives including Winter Blanket Distribution, Project Shikhkha, and Emergency Relief missions.",
// };
const projects = [
  {
    id: 1,
    title: "Education Support",
    description:
      "Providing books, school materials, and scholarships to underprivileged students across Bangladesh.",
    image: "https://i.ibb.co.com/1fS6bTsd/mission-3.jpg",
  },
  {
    id: 2,
    title: "Food Distribution",
    description:
      "Regular food packages distributed to low-income families and during emergencies.",
    image: "https://i.ibb.co.com/KSGmtdQ/food.jpg",
  },
  {
    id: 3,
    title: "Green Earth Mission",
    description:
      "Mass tree plantation and climate awareness programs to build a sustainable and greener Bangladesh.",
    image: "https://i.ibb.co.com/rfb4dDxC/climate.jpg",
  },
];

export default function OngoingProjects() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
        Our Ongoing Projects
      </h2>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
        Making a meaningful impact through continuous community initiatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border-2 border-orange-100 hover:border-orange-500 flex flex-col h-full transition-transform duration-300   hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-all group-hover:gap-3"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
