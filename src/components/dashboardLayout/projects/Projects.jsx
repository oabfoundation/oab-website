"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon, MapPin, Calendar, Tag, Users, Activity, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // ✅ Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Proti page-e koita project dekhate চাও

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

  // ✅ Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ... (openEditModal, handleUpdate, handleDelete functions same thakbe)

  return (
    <div className="space-y-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((post) => (
          <div key={post._id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* ... (Post Image & Content Section) ... */}
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
                  <button onClick={() => openEditModal(post)} className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors cursor-pointer">
                    <Edit2 size={16} /> Edit
                  </button>
                  <button onClick={() => handleDelete(post._id)} className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors cursor-pointer">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Professional Pagination UI */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-10">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* ✅ Edit Modal Logic (Same as before) */}
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