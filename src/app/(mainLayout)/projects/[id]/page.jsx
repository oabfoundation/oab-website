import { notFound } from "next/navigation";
import { Calendar, Users, MapPin, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/app/api/projects/route";

// Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await getProjects();
  const projectsList = res.success ? res.data : [];
  const projects = projectsList.find((n) => n._id === id);
  if (!projects) return { title: "projects Not Found" };

  return {
    title: `${projects.title} | OAB Foundation`,
    description: projects.desc,
  };
}
// Static paths generation
export async function generateStaticParams() {
  const res = await getProjects();
  const projectsList = res.success ? res.data : [];
  return projectsList.map((projects) => ({
    id: projects._id.toString(),
  }));
}

// Status badge component
const StatusBadge = ({ status }) => {
  const styles = {
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    upcoming: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Stat card component
const StatCard = ({ label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await getProjects();
  const projectData = res.success ? res.data : [];
  const project = projectData.find((p) => p._id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 md:px-6 pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[400px] w-full px-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-2xl"
          priority
        />

        {/* Back button */}
        <Link
          href="/projects"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/20 backdrop-blur-md text-orange-600 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 pb-12 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 backdrop-blur rounded-lg">
              {project.icon}
            </div>
            <span className="text-sm font-medium bg-orange-600 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            icon={<Calendar size={20} />}
            label="Since"
            value={project.date.split(" - ")[0]}
          />
          <StatCard
            icon={<Users size={20} />}
            label="Participates"
            value={project.participates.toLocaleString()}
          />
          <StatCard
            icon={<MapPin size={20} />}
            label="Location"
            value={project.location}
          />
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="text-orange-600">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Project
            </h2>
            <div className="prose prose-lg prose-orange">
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="mt-8 p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-orange-600">
                    {project.participates.toLocaleString()}+
                  </p>
                  <p className="text-sm text-gray-600">Lives Impacted</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">100%</p>
                  <p className="text-sm text-gray-600">Donations to Cause</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Support Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Support This Project
              </h3>
              <p className="text-gray-600 mb-6">
                Your contribution helps us expand our reach and create lasting
                change.
              </p>
              <Link
                href="/donate"
                className="w-full flex items-center justify-center bg-orange-600 text-white py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors font-semibold mb-3"
              >
                Donate Now
              </Link>
              <Link
                href="https://forms.gle/P8emtLLTMDE759TTA"
                target="_blank"
                className="w-full flex items-center justify-center border-2 border-orange-600 text-orange-600 py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors font-semibold"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailsPage;
