"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  BookOpen,
  MapPin,
  Users,
  Calendar,
  Image as ImageIcon,
  Tag,
  Save,
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
      category: "Education",
      beneficiaries: "",
      location: "",
      date: "2020 - Present",
      status: "ongoing",
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
         router.push('/dashboard/projects')
      } else {
        alert("Error: " + res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 max-w-4xl mx-auto my-10">
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
              placeholder=" Education Support"
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
            <select
              {...register("category")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
            >
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Relief">Relief</option>
              <option value="Environment">Environment</option>
            </select>
          </div>

          {/* Beneficiaries */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Users size={16} className="text-orange-500" /> Beneficiaries
            </label>
            <input
              type="number"
              {...register("beneficiaries")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100"
              placeholder="
               1250"
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
            <ImageIcon size={16} className="text-orange-500" /> Image URL
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
