"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddMemberForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/general-member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Added!",
          text: "New team member joined successfully.",
          icon: "success",
          confirmButtonColor: "#8B5CF6",
        });
        reset();
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-100 my-10 font-sans">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Add Team Member
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
            placeholder="e.g. Content Marketing"
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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold cursor-pointer text-white transition-all shadow-lg ${
            loading
              ? "bg-gray-400"
              : "bg-orange-600 hover:bg-orange-700 active:scale-95 shadow-orange-200"
          }`}
        >
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>
    </div>
  );
}
