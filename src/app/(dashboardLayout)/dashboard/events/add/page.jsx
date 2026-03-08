"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Type,
  Calendar,
  Image as ImageIcon,
  AlignLeft,
  MapPin,
  Send,
  BookOpenCheck,
} from "lucide-react";
import { postEvents } from "@/app/api/events/route";

const AddNewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = async (data) => {
    const formatData = {
      ...data,
      slug: data.title.toLowerCase().trim().replace(/\s+/g, "-"),
    };
    try {
      const res = await postEvents(formatData);

      if (res.success) {
        alert("Event added successfully!");
        reset();
      } else {
        alert("Error: " + res.message);
      }
    } catch (err) {
      console.error("Error submitting event:", err);
      alert("Something went wrong!");
    }
  };
  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 max-w-5xl mx-auto my-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
        <div className="p-3 bg-orange-50 rounded-2xl text-orange-600">
          <Send size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Post Latest events
          </h2>
          <p className="text-slate-500 text-sm">
            Share the success stories of OAB Foundation with the world.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Type size={16} className="text-orange-500" /> Event Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              placeholder=" Winter Blanket Distribution 2025"
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 transition-all ${
                errors.title
                  ? "border-red-300 focus:ring-red-50"
                  : "border-slate-200 focus:ring-orange-100"
              }`}
            />
            {errors.title && (
              <span className="text-xs text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Calendar size={16} className="text-orange-500" /> Date
            </label>
            <input
              {...register("date", { required: "Date is required" })}
              placeholder=" 15 January 2026"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" /> Location
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              placeholder="Northern Bangladesh"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <BookOpenCheck size={16} className="text-orange-500" /> Category
            </label>
            <input
              {...register("category", { required: "category is required" })}
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.category
                  ? "border-red-400 focus:ring-red-100"
                  : "border-slate-200 focus:ring-orange-100"
              }`}
              placeholder="Education"
            />
            {errors.category && (
              <span className="text-xs text-red-500">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <AlignLeft size={16} className="text-orange-500" /> Short Summary
          </label>
          <textarea
            {...register("desc", { required: "Short Description is required" })}
            rows={2}
            placeholder="Write a brief intro (max 150 characters)..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-100 resize-none"
          />
        </div>

        {/* Long Description */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">
            Full Detailed Story
          </label>
          <textarea
            {...register("longDesc", {
              required: "Long Description is required",
            })}
            rows={5}
            placeholder="Explain the whole impact journey here..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <ImageIcon size={16} className="text-orange-500" /> Cover Image URL
          </label>
          <input
            {...register("image", { required: "image is required" })}
            placeholder="https://oabfoundation.org/photo.jpg"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-100 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          Publish Events
        </button>
      </form>
    </section>
  );
};

export default AddNewsForm;
