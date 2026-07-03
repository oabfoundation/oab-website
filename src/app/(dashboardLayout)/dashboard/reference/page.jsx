"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Trash2, Edit2 } from "lucide-react";

export default function ReferenceForm() {
  const [loading, setLoading] = useState(false);
  const [references, setReferences] = useState([]);
  const [fetchingReferences, setFetchingReferences] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch all references on mount
  useEffect(() => {
    fetchReferences();
  }, []);

  const fetchReferences = async () => {
    setFetchingReferences(true);
    try {
      const response = await fetch("/api/reference");
      const data = await response.json();
      setReferences(data || []);
    } catch (error) {
      console.error("Error fetching references:", error);
      Swal.fire("Error", "Failed to fetch references", "error");
    } finally {
      setFetchingReferences(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = editingId
        ? `/api/reference/${editingId}`
        : "/api/reference";
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
          text: `Reference ${isEdit} successfully.`,
          icon: "success",
          confirmButtonColor: "#8B5CF6",
        });
        reset();
        setEditingId(null);
        fetchReferences();
      } else {
        Swal.fire("Error", result.message || "Failed to save reference", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (reference) => {
    setEditingId(reference._id);
    setValue("name", reference.name);
    setValue("destination", reference.destination);
    setValue("program", reference.program);
    setValue("session", reference.session);
    setValue("image", reference.image);
    setValue("quote", reference.quote);
    setValue("achievement", reference.achievement);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const handleDelete = async (id, name) => {
    const confirm = await Swal.fire({
      title: "Delete Reference?",
      text: `Are you sure you want to delete ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      setDeleting(id);
      try {
        const response = await fetch(`/api/reference/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Reference deleted successfully.",
            icon: "success",
            confirmButtonColor: "#8B5CF6",
          });
          fetchReferences();
        } else {
          Swal.fire("Error", result.message || "Failed to delete reference", "error");
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
      {/* Add/Edit Reference Form */}
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {editingId ? "Edit Reference" : "Add Reference"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Student Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Mohammad Rashed"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Destination
            </label>
            <input
              {...register("destination", {
                required: "Destination is required",
              })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. University of Toronto, Canada"
            />
            {errors.destination && (
              <p className="text-red-500 text-xs mt-1">
                {errors.destination.message}
              </p>
            )}
          </div>

          {/* Program */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Program
            </label>
            <input
              {...register("program", { required: "Program is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. M.Sc. in Data Science"
            />
            {errors.program && (
              <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>
            )}
          </div>

          {/* Session */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Session
            </label>
            <input
              {...register("session", { required: "Session is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Fall 2025"
            />
            {errors.session && (
              <p className="text-red-500 text-xs mt-1">{errors.session.message}</p>
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

          {/* Achievement */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Achievement
            </label>
            <input
              {...register("achievement", {
                required: "Achievement is required",
              })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. 100% Graduate Fellowship"
            />
            {errors.achievement && (
              <p className="text-red-500 text-xs mt-1">
                {errors.achievement.message}
              </p>
            )}
          </div>

          {/* Quote */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Quote
            </label>
            <textarea
              {...register("quote", { required: "Quote is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Student testimonial..."
              rows="4"
            />
            {errors.quote && (
              <p className="text-red-500 text-xs mt-1">{errors.quote.message}</p>
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
              {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Reference" : "Add Reference")}
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

      {/* References List */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          References ({references.length})
        </h2>

        {fetchingReferences ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading references...</p>
          </div>
        ) : references.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No references yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Image</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Destination</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Program</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {references.map((reference) => (
                  <tr
                    key={reference._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={reference.image}
                        alt={reference.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/48?text=No+Image";
                        }}
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      {reference.name}
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {reference.destination}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {reference.program}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(reference)}
                          disabled={editingId !== null}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(reference._id, reference.name)}
                          disabled={deleting === reference._id}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Trash2 size={16} />
                          {deleting === reference._id ? "Deleting..." : "Delete"}
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
