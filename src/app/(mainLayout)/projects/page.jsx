import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getProjects } from "@/app/api/projects/route";

// export const metadata = {
//   title: "Our Projects & Impact",
//   description:
//     "Explore OAB Foundation's nationwide initiatives including Winter Blanket Distribution, Project Shikhkha, and Emergency Relief missions.",
// };

const Projects = async () => {
  const projectsData = await getProjects();
  const projects = projectsData.success ? projectsData.data : [];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto text-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Ongoing <span className="text-orange-600">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-2 text-lg md:text-xl text-gray-600">
          We believe in sharing our journey with you. Stay updated with our
          ongoing programs, recent successes, and upcoming humanitarian efforts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border-2 border-orange-100 hover:border-orange-500 flex flex-col h-full transition-transform duration-300   hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <Image
                width={300}
                height={200}
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
                href={`/projects/${project._id}`}
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-all group-hover:gap-3"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
