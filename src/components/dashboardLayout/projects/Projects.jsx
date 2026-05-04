"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon } from "lucide-react";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);
const [formData, setFormData] = useState({
  title: "",
  image: "",
});


const openEditModal = (project) => {
  setSelectedProject(project);
  setFormData({
    title: project.title || "",
    image: project.image || "",
  });
  setIsEditOpen(true);
};

// Data fetch
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/getProjects"); 
      const projectsData = await res.json();

      if (projectsData.success) {
        setProjects(projectsData.data);
      }
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  fetchProjects();
}, []);

const handleDelete = async (id) => {
  const confirmDelete = confirm("Are you sure you want to delete?");

  if (!confirmDelete) return;

  try {
    const res = await fetch(`/api/getProjects/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      setProjects((prev) => prev.filter((p) => p._id !== id));
    }
  } catch (error) {
    console.error("Delete failed", error);
  }
};

const handleUpdate = async () => {
  try {
    const res = await fetch(`/api/getProjects/${selectedProject._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      // UI update
      setProjects((prev) =>
        prev.map((p) =>
          p._id === selectedProject._id ? { ...p, ...formData } : p
        )
      );

      setIsEditOpen(false);
    }
  } catch (error) {
    console.error("Update failed", error);
  }
};
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
                onClick={() => openEditModal(post)}
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

      {isEditOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-[400px]">
      <h2 className="text-xl font-bold mb-4">Edit Project</h2>

      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
        className="w-full border p-2 mb-3 rounded"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) =>
          setFormData({ ...formData, image: e.target.value })
        }
        className="w-full border p-2 mb-4 rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          className="flex-1 bg-green-500 text-white py-2 rounded"
        >
          Update
        </button>

        <button
          onClick={() => setIsEditOpen(false)}
          className="flex-1 bg-gray-300 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Projects;
