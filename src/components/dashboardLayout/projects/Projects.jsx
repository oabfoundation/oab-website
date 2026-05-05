"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon, MapPin, Calendar, Tag, Users, Activity } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    longDescription: "",
    category: "",
    location: "",
    date: "",
    status: "",
    image: "",
    participates: ""
  });

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

  const openEditModal = (project) => {
    setSelectedProject(project);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      longDescription: project.longDescription || "",
      category: project.category || "",
      location: project.location || "",
      date: project.date || "",
      status: project.status || "",
      image: project.image || "",
      participates: project.participates || ""
    });
    setIsEditOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/getProjects/${selectedProject._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
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

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete?")) return;
    try {
      const res = await fetch(`/api/getProjects/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((post) => (
        <div key={post._id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 w-full overflow-hidden bg-slate-100">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                <ImageIcon size={40} />
              </div>
            )}
          </div>

          <div className="p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded mb-2 inline-block">
              {post.category}
            </span>
            <h3 className="text-lg font-bold text-slate-800 truncate mb-1">{post.title}</h3>
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">{post.description}</p>
            
            <div className="flex gap-2">
              <button onClick={() => openEditModal(post)} className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                <Edit2 size={16} /> Edit
              </button>
              <button onClick={() => handleDelete(post._id)} className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors">
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Full Detailed Professional Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in duration-200 border border-slate-100">
            
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Edit2 size={20} className="text-orange-500" /> Edit Project
              </h2>
              <button onClick={() => setIsEditOpen(false)} className="text-slate-400 hover:text-red-500 text-2xl">&times;</button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              
              {/* Row 1: Title & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Title</label>
                  <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
                  <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
              </div>

              {/* Row 2: Date & Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Calendar size={12}/> Date</label>
                  <input type="text" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Activity size={12}/> Status</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all">
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Location & Participates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><MapPin size={12}/> Location</label>
                  <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Users size={12}/> Participates</label>
                  <input type="number" value={formData.participates} onChange={(e) => setFormData({ ...formData, participates: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Image URL</label>
                <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Short Description</label>
                <textarea rows="2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all resize-none" />
              </div>

              {/* Long Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Long Description</label>
                <textarea rows="4" value={formData.longDescription} onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
              </div>

            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex gap-3">
              <button onClick={() => setIsEditOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-all">
                Discard
              </button>
              <button onClick={handleUpdate} className="flex-[2] px-4 py-2.5 rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all active:scale-95">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;