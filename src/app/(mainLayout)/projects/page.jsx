"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/app/api/projects/route";
import { BookOpen, Utensils, HeartPulse, Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        if (res.success) {
          setProjects(res.data);
        } else {
          console.error("Failed to fetch projects:", res.message);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Ongoing <span className="text-orange-600">Projects</span>
          </h2>
          <p className="mt-2 text-lg md:text-xl text-gray-600">
            Making a meaningful impact through continuous community initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64">
                {project.image && project.image.length > 0 ? (
                  ""
                  // <Image
                  //   src={project.image[0]}
                  //   alt={project.title}
                  //   fill
                  //   className="object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
                  // />
                ) : (
                  <div className="bg-gray-200 h-full w-full rounded-t-2xl flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>

                <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                  <div className="flex items-center gap-1">
                    <Users size={16} /> {project.beneficiaries} beneficiaries
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} /> {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} /> {project.status}
                  </div>
                </div>

                <p className="text-gray-700 mt-2 line-clamp-3">{project.description}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{project.longDescription}</p>

                {/* Learn More Button */}
                <Link
                  href={`/projects/${project._id}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 text-orange-500 font-semibold cursor-pointer hover:translate-x-1 hover:scale-105 transition-all duration-300"
                >
                  Learn More <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;