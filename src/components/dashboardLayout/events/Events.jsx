"use client";
import React, { useEffect, useState } from "react";
import { Edit2, Trash2, ImageIcon } from "lucide-react";
import { getEvents } from "@/app/api/events/route";

const Events = () => {
  const [events, setEvents] = useState([]);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
  });

 useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      if (eventsData.success) {
        setEvents(eventsData.data);
      }
    };
    fetchEvents();
  }, []);

  // ✅ Open modal
  const openEditModal = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title || "",
      image: event.image || "",
    });
    setIsEditOpen(true);
  };

  // ✅ Update
  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/events/${selectedEvent._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setEvents((prev) =>
          prev.map((e) =>
            e._id === selectedEvent._id ? { ...e, ...formData } : e
          )
        );

        setIsEditOpen(false);
      }
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setEvents((prev) => prev.filter((e) => e._id !== id));
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {events.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-sm border overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 bg-slate-100">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <ImageIcon size={40} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold mb-4">{post.title}</h3>
              

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
      </div>

      {/* ✅ Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Event</h2>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 mb-3"
              placeholder="Title"
            />

            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full border p-2 mb-4"
              placeholder="Image URL"
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
    </>
  );
};

export default Events;