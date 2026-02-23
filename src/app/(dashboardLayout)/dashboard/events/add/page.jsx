"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postEvents } from "@/app/api/events/route"; 
const AddEvents = () => {
  const router = useRouter();


  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    desc: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await postEvents(formData);

    if (res.success) {
      alert("Event Added Successfully");
      router.push("/dashboard/events");
    } else {
      alert("Something went wrong: " + res.message);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-sm mt-10">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Add New Event</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
          <input
            type="text"
            name="title"
            placeholder=" Winter Blanket Distribution 2025"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input
              type="text"
              name="date"
              placeholder="15 January 2026"
              required
              onChange={handleChange}
              className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Impact / Charity"
              required
              onChange={handleChange}
              className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
          <input
            type="file"
            name="image"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
          <textarea
            name="desc"
            rows="4"
            placeholder="Describe the event..."
            required
            onChange={handleChange}
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default AddEvents;