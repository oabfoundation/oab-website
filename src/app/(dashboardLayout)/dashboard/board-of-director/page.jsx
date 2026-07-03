"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Trash2, Edit2 } from "lucide-react";

export default function BoardOfDirectorForm() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [fetchingMembers, setFetchingMembers] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch all members on mount
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setFetchingMembers(true);
    try {
      const response = await fetch("/api/board-of-director");
      const data = await response.json();
      setMembers(data || []);
    } catch (error) {
      console.error("Error fetching members:", error);
      Swal.fire("Error", "Failed to fetch board members", "error");
    } finally {
      setFetchingMembers(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const url = editingId
        ? `/api/board-of-director/${editingId}`
        : "/api/board-of-director";
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
          text: `Board member ${isEdit} successfully.`,
          icon: "success",
          confirmButtonColor: "#8B5CF6",
        });
        reset();
        setEditingId(null);
        fetchMembers();
      } else {
        Swal.fire("Error", result.message || "Failed to save member", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (member) => {
    setEditingId(member._id);
    setValue("name", member.name);
    setValue("designation", member.designation);
    setValue("image", member.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const handleDelete = async (id, name) => {
    const confirm = await Swal.fire({
      title: "Delete Board Member?",
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
        const response = await fetch(`/api/board-of-director/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Board member deleted successfully.",
            icon: "success",
            confirmButtonColor: "#8B5CF6",
          });
          fetchMembers();
        } else {
          Swal.fire("Error", result.message || "Failed to delete member", "error");
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
      {/* Add/Edit Board Member Form */}
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {editingId ? "Edit Board Member" : "Add Board Member"}
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

          {/* Designation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Designation
            </label>
            <input
              {...register("designation", {
                required: "Designation is required",
              })}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g. Board Director"
            />
            {errors.designation && (
              <p className="text-red-500 text-xs mt-1">
                {errors.designation.message}
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
              {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Member" : "Add Member")}
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

      {/* Board Members List */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Board Members ({members.length})
        </h2>

        {fetchingMembers ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading members...</p>
          </div>
        ) : members.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No board members yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Image</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Designation</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr
                    key={member._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/48?text=No+Image";
                        }}
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      {member.name}
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {member.designation}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(member)}
                          disabled={editingId !== null}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(member._id, member.name)}
                          disabled={deleting === member._id}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all font-medium"
                        >
                          <Trash2 size={16} />
                          {deleting === member._id ? "Deleting..." : "Delete"}
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
