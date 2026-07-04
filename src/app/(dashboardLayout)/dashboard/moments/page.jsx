"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Trash2, Edit2 } from "lucide-react";

export default function MomentsForm() {
  const [loading, setLoading] = useState(false);
  const [moments, setMoments] = useState([]);
  const [fetchingMoments, setFetchingMoments] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch all moments on mount
  useEffect(() => {
    fetchMoments();
  }, []);

  const fetchMoments = async () => {
    setFetchingMoments(true);
    try {
      const response = await fetch("/api/moments");
      const data = await response.json();
      setMoments(data?.data || []);
    } catch (error) {
      console.error("Error fetching moments:", error);
      Swal.fire("Error", "Failed to fetch moments", "error");
    } finally {
      setFetchingMoments(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = editingId ? `/api/moments/${editingId}` : "/api/moments";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        const isEdit = editingId ? "updated" : "added";
        Swal.fire({
          title: "Success!",
          text: `Moment ${isEdit} successfully.`,
          icon: "success",
          confirmButtonColor: "#8B5CF6",
        });
        reset();
        setEditingId(null);
        fetchMoments();
      } else {
        Swal.fire("Error", result.message || "Failed to save moment", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (moment) => {
    setEditingId(moment._id);
    setValue("name", moment.name);
    setValue("role", moment.role);
    setValue("title", moment.title);
    setValue("description", moment.description);
    setValue("events", moment.events);
    setValue("dateAndTime", moment.dateAndTime);
    setValue("location", moment.location);
    setValue("image", moment.image);
    setValue("link", moment.link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const handleDelete = async (id, title) => {
    const confirm = await Swal.fire({
      title: "Delete Moment?",
      text: `Are you sure you want to delete "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      setDeleting(id);
      try {
        const response = await fetch(`/api/moments/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Moment deleted successfully.",
            icon: "success",
            confirmButtonColor: "#8B5CF6",
          });
          fetchMoments();
        } else {
          Swal.fire("Error", result.message || "Failed to delete moment", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong!", "error");
      } finally {
        setDeleting(null);
      }
    }
  };

  return (
    <div className="mx-auto p-8 font-sans">
      {/* Add/Edit Moment Form */}
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {editingId ? "Edit Moment" : "Add Moment"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Person Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Mohyminul Islam"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Role/Title
            </label>
            <input
              {...register("role", { required: "Role is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Our Web Developer"
            />
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Moment Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Moment Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Birampur General Olympiad-2026"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Detailed description of the moment..."
              rows="4"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Events */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Event Name
            </label>
            <input
              {...register("events", { required: "Event name is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Birampur General Olympiad-2026"
            />
            {errors.events && (
              <p className="text-red-500 text-xs mt-1">{errors.events.message}</p>
            )}
          </div>

          {/* Date and Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Date and Time
            </label>
            <input
              {...register("dateAndTime", {
                required: "Date and time is required",
              })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. May 26, 2026 • 10:30 AM"
            />
            {errors.dateAndTime && (
              <p className="text-red-500 text-xs mt-1">
                {errors.dateAndTime.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Birampur, Bangladesh"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image URL
            </label>
            <input
              {...register("image", { required: "Image URL is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="https://images.unsplash.com/..."
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Link
            </label>
            <input
              {...register("link")}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="https://example.com"
            />
            {errors.link && (
              <p className="text-red-500 text-xs mt-1">{errors.link.message}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-4 rounded-xl font-bold cursor-pointer text-white transition-all shadow-lg ${
                loading
                  ? "bg-gray-400"
                  : "bg-orange-600 hover:bg-orange-700 active:scale-95 shadow-orange-200"
              }`}
            >
              {loading
                ? editingId
                  ? "Updating..."
                  : "Adding..."
                : editingId
                ? "Update Moment"
                : "Add Moment"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="flex-1 py-4 rounded-xl font-bold cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all shadow-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Moments List */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Moments ({moments.length})
        </h2>

        {fetchingMoments ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading moments...</p>
          </div>
        ) : moments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No moments yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Image</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Title</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Person</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Location</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Date & Time</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {moments.map((moment) => (
                  <tr
                    key={moment._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/48?text=No+Image";
                        }}
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800 max-w-xs truncate">
                      {moment.title}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {moment.name}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {moment.location}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {moment.dateAndTime}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(moment)}
                          disabled={editingId !== null}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(moment._id, moment.title)}
                          disabled={deleting === moment._id}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Trash2 size={16} />
                          {deleting === moment._id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
