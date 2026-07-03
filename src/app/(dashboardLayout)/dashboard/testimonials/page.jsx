"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Trash2, Edit2, Star } from "lucide-react";

export default function TestimonialsForm() {
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [fetchingTestimonials, setFetchingTestimonials] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setFetchingTestimonials(true);
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      Swal.fire("Error", "Failed to fetch testimonials", "error");
    } finally {
      setFetchingTestimonials(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = editingId
        ? `/api/testimonials/${editingId}`
        : "/api/testimonials";
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
          text: `Testimonial ${isEdit} successfully.`,
          icon: "success",
          confirmButtonColor: "#8B5CF6",
        });
        reset();
        setEditingId(null);
        fetchTestimonials();
      } else {
        Swal.fire("Error", result.message || "Failed to save testimonial", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial._id);
    setValue("name", testimonial.name);
    setValue("designation", testimonial.designation || "");
    setValue("image", testimonial.image || "");
    setValue("message", testimonial.message);
    setValue("rating", testimonial.rating || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const handleDelete = async (id, name) => {
    const confirm = await Swal.fire({
      title: "Delete Testimonial?",
      text: `Are you sure you want to delete ${name}'s testimonial?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      setDeleting(id);
      try {
        const response = await fetch(`/api/testimonials/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Testimonial deleted successfully.",
            icon: "success",
            confirmButtonColor: "#8B5CF6",
          });
          fetchTestimonials();
        } else {
          Swal.fire("Error", result.message || "Failed to delete testimonial", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong!", "error");
      } finally {
        setDeleting(null);
      }
    }
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="text-gray-400">No rating</span>;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="mx-auto p-8 font-sans">
      {/* Add/Edit Testimonial Form */}
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {editingId ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Designation (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Designation (Optional)
            </label>
            <input
              {...register("designation")}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. CEO, Company Name"
            />
          </div>

          {/* Image URL (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image URL (Optional)
            </label>
            <input
              {...register("image")}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. This organization has been amazing..."
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Rating (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Rating (Optional - 1 to 5)
            </label>
            <input
              {...register("rating", {
                valueAsNumber: true,
                min: { value: 1, message: "Rating must be at least 1" },
                max: { value: 5, message: "Rating must be at most 5" },
              })}
              type="number"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. 5"
              min="1"
              max="5"
            />
            {errors.rating && (
              <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>
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
              {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Testimonial" : "Add Testimonial")}
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

      {/* Testimonials List */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Testimonials ({testimonials.length})
        </h2>

        {fetchingTestimonials ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No testimonials yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Image</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Designation</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Message</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Rating</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial) => (
                  <tr
                    key={testimonial._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/48?text=No+Image";
                        }}
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      {testimonial.name}
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {testimonial.designation || "-"}
                    </td>
                    <td className="py-4 px-4 text-gray-600 max-w-xs truncate">
                      {testimonial.message}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-0.5">
                        {renderStars(testimonial.rating)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(testimonial)}
                          disabled={editingId !== null}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(testimonial._id, testimonial.name)}
                          disabled={deleting === testimonial._id}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Trash2 size={16} />
                          {deleting === testimonial._id ? "Deleting..." : "Delete"}
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
