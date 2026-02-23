"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postProjects } from "@/app/api/projects/route";
import AddProjects from "../../Components/AddProjects";

const AddProjectPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postProjects()

    const data = await res.json();

    if (data.success) {
      alert("Project Added Successfully ");
      router.push("/dashboard/projects");
    } else {
      alert("Something went wrong ");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Project Description"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="file"
          name="image"
          placeholder="Image URL"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

<AddProjects formData={formData}></AddProjects>

      </form>
    </div>
  );
};

export default AddProjectPage;