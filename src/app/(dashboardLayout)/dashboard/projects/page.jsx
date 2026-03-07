import Projects from "@/components/dashboardLayout/projects/Projects";
import { Plus } from "lucide-react";
import Link from "next/link";

const DashboardProjects = () => {
  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Manage Projects
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Add, edit and manage all your ongoing projects here.
          </p>
        </div>

        <Link
          href="/dashboard/projects/add"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 
          text-white px-5 py-2.5 rounded-xl shadow-md 
          hover:shadow-lg transition duration-300 cursor-pointer"
        >
          <Plus size={18} />
          Add Project
        </Link>
      </div>

      <Projects />
    </div>
  );
};

export default DashboardProjects;
