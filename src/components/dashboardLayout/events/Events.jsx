"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon, MapPin, Calendar, Tag, AlignLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Swal from "sweetalert2";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // ✅ Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    desc: "",
    longDesc: "",
    category: "",
    location: ""
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/getEvents");
        const data = await res.json();
        if (data.success) setEvents(data.data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };
    fetchEvents();
  }, []);

  // ✅ Pagination Calculation
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title || "",
      date: event.date || "",
      image: event.image || "",
      desc: event.desc || "",
      longDesc: event.longDesc || "",
      category: event.category || "",
      location: event.location || ""
    });
    setIsEditOpen(true);
  };

  // const handleUpdate = async () => {
  //   try {
  //     const res = await fetch(`/api/getEvents/${selectedEvent._id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();
  //     if (data.success) {
  //       setEvents((prev) =>
  //         prev.map((e) => (e._id === selectedEvent._id ? { ...e, ...formData } : e))
  //       );
  //       setIsEditOpen(false);
  //     }
  //   } catch (error) {
  //     console.error("Update failed", error);
  //   }
  // };

  const handleUpdate = async () => {
  try {
    const res = await fetch(`/api/getEvents/${selectedEvent._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setEvents((prev) =>
        prev.map((e) => (e._id === selectedEvent._id ? { ...e, ...formData } : e))
      );
      setIsEditOpen(false);

      Swal.fire({
        title: "Updated!",
        text: "Event updated successfully!",
        icon: "success",
        confirmButtonColor: "#ea580c",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message || "Failed to update event.",
        icon: "error",
        confirmButtonColor: "#ea580c",
      });
    }
  } catch (error) {
    console.error("Update failed", error);
    Swal.fire({
      title: "Error!",
      text: "Something went wrong. Please try again.",
      icon: "error",
      confirmButtonColor: "#ea580c",
    });
  }
};

  // const handleDelete = async (id) => {
  //   if (!confirm("Are you sure?")) return;
  //   try {
  //     const res = await fetch(`/api/getEvents/${id}`, { method: "DELETE" });
  //     if ((await res.json()).success) {
  //       setEvents((prev) => prev.filter((e) => e._id !== id));
  //     }
  //   } catch (error) {
  //     console.error("Delete failed", error);
  //   }
  // };

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this event!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ea580c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/getEvents/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.success) {
          setEvents((prev) => prev.filter((e) => e._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "The event has been deleted.",
            icon: "success",
            confirmButtonColor: "#ea580c",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: data.message || "Failed to delete the event.",
            icon: "error",
            confirmButtonColor: "#ea580c",
          });
        }
      } catch (error) {
        console.error("Delete failed", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#ea580c",
        });
      }
    }
  });
};

  return (
    <div className="space-y-10 bg-slate-50 min-h-screen">
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEvents.map((event) => (
          <div key={event._id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
            <div className="h-48 bg-slate-100 overflow-hidden">
              {event.image ? (
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-300"><ImageIcon size={40} /></div>
              )}
            </div>

            <div className="p-5">
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded mb-2 inline-block">{event.category}</span>
              <h3 className="text-lg font-bold text-slate-800 mb-2 truncate">{event.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">{event.desc}</p>
              
              <div className="flex gap-2">
                <button onClick={() => openEditModal(event)} className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-xl font-semibold hover:bg-orange-100 transition-colors cursor-pointer">
                  <Edit2 size={16} /> Edit
                </button>
                <button onClick={() => handleDelete(event._id)} className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-xl font-semibold hover:bg-red-100 transition-colors cursor-pointer">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination UI */}
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

      {/* ✅ Modal (Oibhabei thakbe) */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in duration-200">
            {/* Modal content input gulo */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-bold text-slate-800">Update Event Details</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-slate-400 hover:text-red-500 text-3xl leading-none">&times;</button>
            </div>
            {/* ... input fields (title, date, desc etc.) ... */}
            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><Edit2 size={14}/> Title</label>
                  <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><Tag size={14}/> Category</label>
                  <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
                </div>
              </div>
              {/* Image URL, Location, Dates, Descriptions continue... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><Calendar size={14}/> Date</label>
                  <input type="text" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><MapPin size={14}/> Location</label>
                  <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><ImageIcon size={14}/> Image URL</label>
                <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2"><AlignLeft size={14}/> Short Description</label>
                <textarea rows="2" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all resize-none" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600 mb-1">Detailed Description</label>
                <textarea rows="4" value={formData.longDesc} onChange={(e) => setFormData({ ...formData, longDesc: e.target.value })} className="w-full border border-slate-200 p-2.5 rounded-xl outline-none focus:border-orange-500 transition-all" />
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t flex gap-3">
              <button onClick={() => setIsEditOpen(false)} className="flex-1 bg-white border border-slate-200 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-all">Cancel</button>
              <button onClick={handleUpdate} className="flex-[2] bg-orange-600 text-white py-2.5 rounded-xl font-bold hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all">Update Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;