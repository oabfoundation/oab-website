"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon } from "lucide-react";
import { getProjects } from "@/app/api/projects/route";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Data fetch
  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      if (projectsData.success) {
        setProjects(projectsData.data);
      }
    };
    fetchProjects();
  }, []);

  const handleEdit = (id) => console.log("Edit ID:", _id);
  const handleDelete = (id) => console.log("Delete ID:", _id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((post) => (
        <div
          key={post._id}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          {/* Image Section */}
          <div className="h-48 w-full overflow-hidden bg-slate-100">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                <ImageIcon size={40} />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-slate-800 truncate mb-4">
              {post.title}
            </h3>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(post._id)}
                className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors cursor-pointer"
              >
                <Edit2 size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(post._id)}
                className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors cursor-pointer"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
