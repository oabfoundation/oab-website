"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  BookOpen,
  MapPin,
  Users,
  Image as ImageIcon,
  Tag,
  Save,
  CalendarFold,
  Info,
} from "lucide-react";
import { postProjects } from "@/app/api/projects/route";
import { useRouter } from "next/navigation";

const AddProjectForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      participates: "",
      location: "",
      status: "Select Status",
      date: "",
      description: "",
      longDescription: "",
      image: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await postProjects(data);
      if (res.success) {
        alert("Project Data Submitted Successfully!");
        router.push("/dashboard/projects");
      } else {
        alert("Error: " + res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto my-10">
      <div className="flex items-center gap-3 mb-8 border-b pb-6">
        <div className="p-3 bg-orange-100 rounded-2xl">
          <BookOpen className="text-orange-600" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Add New Project</h2>
          <p className="text-sm text-slate-500">
            Fill in the details to showcase your impact.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Tag size={16} className="text-orange-500" /> Project Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.title
                  ? "border-red-400 focus:ring-red-100"
                  : "border-slate-200 focus:ring-orange-100"
              }`}
              placeholder="Enter project name"
            />
            {errors.title && (
              <span className="text-xs text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <BookOpen size={16} className="text-orange-500" /> Category
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

          {/* participates */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Users size={16} className="text-orange-500" /> Participates
            </label>
            <input
              type="number"
              {...register("participates")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
              placeholder="Participates"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" /> Location
            </label>
            <input
              {...register("location")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
              placeholder="Dhaka, Bangladesh"
            />
          </div>

          {/* status */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Info size={16} className="text-orange-500" /> status
            </label>
            <select
              {...register("status")}
              className="w-full px-4 py-3 cursor-pointer bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
            >
              <option>Select Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="complete">Complete</option>
            </select>
          </div>

          {/* date */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <CalendarFold size={16} className="text-orange-500" /> Date
            </label>
            <input
              {...register("date")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
              placeholder="07 March 2026"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">
            Short Description
          </label>
          <textarea
            {...register("description")}
            rows={2}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
            placeholder="A brief summary of the project..."
          />
        </div>

        {/* Long Description */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">
            Detailed Description
          </label>
          <textarea
            {...register("longDescription")}
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
            placeholder="Tell the full story here..."
          />
        </div>

        {/* Image Link */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <ImageIcon size={16} className="text-orange-500" /> Only Image URL
          </label>
          <input
            {...register("image")}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
        >
          <Save size={20} /> Save Project Details
        </button>
      </form>
    </section>
  );
};

export default AddProjectForm;
