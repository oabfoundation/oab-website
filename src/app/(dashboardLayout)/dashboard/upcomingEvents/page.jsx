"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

export default function EventRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/upcoming-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Success Alert
        Swal.fire({
          title: "Success!",
          text: "Your event has been published successfully.",
          icon: "success",
          confirmButtonColor: "#ea580c", // Orange-600
          timer: 3000,
        });
        reset();
      } else {
        // Error Alert from Server
        Swal.fire({
          title: "Error!",
          text: result.message || "Something went wrong",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      // Network or other errors
      Swal.fire({
        title: "Failed!",
        text: "Could not connect to the server.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-2xl rounded-3xl border border-gray-100 my-10 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Add New Upcoming Event
        </h2>
        <p className="text-gray-500">
          Fill out the details to publish a new event on the portal.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div className="grid grid-cols-1 gap-4">
          <label className="text-sm font-bold text-gray-700">Event Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all"
            placeholder="e.g. Tech Innovation Summit 2026"
          />
          {errors.title && (
            <span className="text-red-500 text-xs italic">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 gap-4">
          <label className="text-sm font-bold text-gray-700">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none h-32 transition-all"
            placeholder="Write a brief overview..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Venue & Category */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-gray-700">Venue</label>
            <input
              {...register("venue")}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-orange-500 outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <select
              {...register("category")}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            >
              <option value="Technology">Technology</option>
              <option value="Workshop">Workshop</option>
              <option value="Career">Career</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">
              Event Date
            </label>
            <input
              type="datetime-local"
              {...register("event_date", { required: true })}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">
              End Date
            </label>
            <input
              type="datetime-local"
              {...register("end_date", { required: true })}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">
              Apply Deadline
            </label>
            <input
              type="datetime-local"
              {...register("apply_deadline", { required: true })}
              className="w-full p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Fee, Seats, Format */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-bold">Fee ($)</label>
            <input
              type="number"
              {...register("fee")}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-bold">Seats Total</label>
            <input
              type="number"
              {...register("seats_total")}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-bold">Format</label>
            <select
              {...register("format")}
              className="w-full p-3 border rounded-xl"
            >
              <option value="In-Person">In-Person</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Registration Link */}
          <div>
            <label className="text-sm font-bold">Registration Link</label>
            <input
              type="url"
              {...register("registerLink")}
              className="w-full p-4 border rounded-2xl"
              placeholder="https://..."
            />
          </div>
          {/* Certificate */}
          <div>
            <label className="text-sm font-bold">Certificate Provided?</label>
            <select
              {...register("certificate")}
              className="w-full p-4 border rounded-2xl"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-5 rounded-2xl cursor-pointer font-bold text-white transition-all shadow-lg ${
            isSubmitting
              ? "bg-gray-400"
              : "bg-orange-600 hover:bg-orange-700 active:scale-95 shadow-orange-200"
          }`}
        >
          {isSubmitting ? "Uploading to Database..." : "Publish Event Now"}
        </button>
      </form>
    </div>
  );
}
