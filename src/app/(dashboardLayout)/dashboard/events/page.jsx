"use client";
import React from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardEvents = () => {
  const router = useRouter();

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Manage Events
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Create, edit and manage all your upcoming events here.
          </p>
        </div>

        <button
          onClick={() => router.push("/dashboard/events/add")}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 
          text-white px-5 py-2.5 rounded-xl shadow-md 
          hover:shadow-lg transition duration-300 cursor-pointer"
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h1>Events data not available</h1>
      </div>
    </div>
  );
};

export default DashboardEvents;
