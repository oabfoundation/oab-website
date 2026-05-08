"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon, MapPin, Calendar, Tag, Users, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import Swal from "sweetalert2";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

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

  // 1. Fetch Projects
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

  // 2. Pagination Logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 3. Open Edit Modal
  const openEditModal = (project) => {
    setSelectedProject(project);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      longDescription: project.longDescription || "",
      category: project.category || "",
      location: project.location || "",
      date: project.date || "",
      status: project.status || "ongoing",
      image: project.image || "",
      participates: project.participates || ""
    });
    setIsEditOpen(true);
  };

  // const handleUpdate = async () => {
  //   try {
  //     const res = await fetch(`/api/getProjects/${selectedProject._id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();
  //     if (data.success) {
  //       // State update like Events component
  //       setProjects((prev) =>
  //         prev.map((p) => (p._id === selectedProject._id ? { ...p, ...formData } : p))
  //       );
  //       setIsEditOpen(false);
  //       alert("Project updated successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Update failed", error);
  //   }
  // };

  // 5. Delete Function

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
        prev.map((p) => (p._id === selectedProject._id ? { ...p, ...formData } : p))
      );
      
      setIsEditOpen(false);

      Swal.fire({
        title: "Updated!",
        text: "Project updated successfully!",
        icon: "success",
        confirmButtonColor: "#ea580c", 
      });
    } else {

      Swal.fire({
        title: "Update Failed",
        text: data.message || "Something went wrong while updating.",
        icon: "error",
        confirmButtonColor: "#ea580c",
      });
    }
  } catch (error) {
    console.error("Update failed", error);
    Swal.fire({
      title: "Error!",
      text: "Failed to connect to the server.",
      icon: "error",
      confirmButtonColor: "#ea580c",
    });
  }
};

  // const handleDelete = async (id) => {
  //   if (!confirm("Are you sure you want to delete this project?")) return;
  //   try {
  //     const res = await fetch(`/api/getProjects/${id}`, {
  //       method: "DELETE",
  //     });
  //     const data = await res.json();

  //     if (data.success) {
  //       setProjects((prev) => prev.filter((p) => p._id !== id));
  //     }
  //   } catch (error) {
  //     console.error("Delete failed", error);
  //   }
  // };

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ea580c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/getProjects/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.success) {
          setProjects((prev) => prev.filter((p) => p._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your project has been deleted.",
            icon: "success",
            confirmButtonColor: "#ea580c",
          });
        }
      } catch (error) {
        console.error("Delete failed", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
          confirmButtonColor: "#ea580c",
        });
      }
    }
  });
};

  return (
    <div className="space-y-8 bg-slate-50 min-h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((post) => (
          <div key={post._id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <ImageIcon size={40} />
                  </div>
                )}
            </div>
            <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded mb-2 inline-block">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 truncate mb-1">{post.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{post.description}</p>

                <div className="flex gap-2">
                  <button onClick={() => openEditModal(post)} className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-xl font-semibold hover:bg-orange-100 transition-colors cursor-pointer">
                    <Edit2 size={16} /> Edit
                  </button>
                  <button onClick={() => handleDelete(post._id)} className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-xl font-semibold hover:bg-red-100 transition-colors cursor-pointer">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-10">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-all"
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
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Edit2 size={20} className="text-orange-500" /> Update Project
              </h2>
              <button onClick={() => setIsEditOpen(false)} className="text-slate-400 hover:text-red-500 text-3xl leading-none">&times;</button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Title</label>
                  <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
                  <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Calendar size={12}/> Date</label>
                  <input type="text" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Activity size={12}/> Status</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all">
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><MapPin size={12}/> Location</label>
                  <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1"><Users size={12}/> Participates</label>
                  <input type="number" value={formData.participates} onChange={(e) => setFormData({ ...formData, participates: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Image URL</label>
                <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Short Description</label>
                <textarea rows="2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all resize-none" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Long Description</label>
                <textarea rows="4" value={formData.longDescription} onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all" />
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex gap-3">
              <button onClick={() => setIsEditOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-all">Cancel</button>
              <button onClick={handleUpdate} className="flex-[2] px-4 py-2.5 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-lg transition-all active:scale-95">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;