import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// export const metadata = {
//   title: "Our Projects & Impact",
//   description:
//     "Explore OAB Foundation's nationwide initiatives including Winter Blanket Distribution, Project Shikhkha, and Emergency Relief missions.",
// };

const Projects = async ({ searchParams }) => {
const params = await searchParams; 
  const page = Number(params?.page) || 1;
  const limit = 12;
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://oabfoundation.org";

const res = await fetch(
    `${baseUrl}/api/getProjects?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const projectsData = await res.json();
  const projects = projectsData.success ? projectsData.data : [];
  const total = projectsData.total || 0;
  const totalPages = Math.ceil(total / limit);


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
          {/* <img
  src={project.image}
  alt={project.title}
  loading="lazy"
  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
/> */}
              <Image
                width={300}
                height={200}
               src={
    project.image?.startsWith("https")
      ? project.image
      : "/placeholder.png"
  }
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
      <div className="flex justify-center mt-12 gap-4">
  {/* Previous */}
  <Link
    href={`?page=${page - 1}`}
    className={`px-4 py-2 border rounded ${
      page === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-100"
    }`}
  >
    Prev
  </Link>

  {/* Page Info */}
  <span className="px-4 py-2">
    Page {page} of {totalPages}
  </span>

  {/* Next */}
 <Link
  href={`?page=${page + 1}`}
  className={`px-4 py-2 border rounded ${
    page >= totalPages
      ? "pointer-events-none opacity-50"
      : "hover:bg-gray-100"
  }`}
>
  Next
</Link>
</div>
    </div>
  );
};
export default Projects;
