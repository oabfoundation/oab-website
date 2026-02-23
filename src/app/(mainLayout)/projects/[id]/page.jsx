import { notFound } from "next/navigation";
import {
  BookOpen,
  Utensils,
  HeartPulse,
  Shirt,
  Laptop,
  Calendar,
  Users,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "Education Support",
    description:
      "Providing books, school materials, and scholarships to underprivileged students across Bangladesh.",
    longDescription:
      "Our Education Support program has been transforming lives since 2020. We provide comprehensive educational support including textbooks, stationery, school uniforms, and merit-based scholarships to talented students from low-income families. Additionally, we conduct after-school tutoring programs and digital literacy workshops to bridge the educational gap.",
    icon: <BookOpen size={28} />,
    category: "Education",
    beneficiaries: 1250,
    location: "Dhaka, Chattogram & Rajshahi",
    date: "2020 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 2,
    title: "Food Distribution",
    description:
      "Regular food packages distributed to low-income families and during emergencies.",
    longDescription:
      "Through our Food Distribution initiative, we've established a sustainable network of food banks and emergency relief programs. Every month, we provide nutritious food packages to 500+ families. During natural disasters and crises, we mobilize quickly to distribute cooked meals and dry food supplies to affected communities.",
    icon: <Utensils size={28} />,
    category: "Food Security",
    beneficiaries: 3500,
    location: "National",
    date: "2018 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 3,
    title: "Medical Aid",
    description:
      "Supporting patients with medical expenses and organizing free health camps.",
    longDescription:
      "Our Medical Aid program provides critical healthcare support to those who cannot afford treatment. We organize free health camps in rural areas, covering general checkups, specialist consultations, and medicine distribution. We also provide financial assistance for surgeries and long-term treatments to patients in need.",
    icon: <HeartPulse size={28} />,
    category: "Healthcare",
    beneficiaries: 2800,
    location: "Multiple Districts",
    date: "2019 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 4,
    title: "Winter Clothing Drive",
    description:
      "Distributing warm clothes to protect vulnerable communities during winter.",
    longDescription:
      "Every winter, we launch a massive clothing drive to protect the most vulnerable from harsh weather conditions. We collect, sort, and distribute warm clothes including blankets, sweaters, jackets, and children's winter wear. Our network of volunteers ensures delivery to remote areas and communities often overlooked by other aid programs.",
    icon: <Shirt size={28} />,
    category: "Seasonal Relief",
    beneficiaries: 4200,
    location: "Northern Districts",
    date: "2017 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 5,
    title: "Skill Development",
    description:
      "Training youth with practical skills to help them become financially independent.",
    longDescription:
      "Our Skill Development program empowers young people with marketable skills for sustainable livelihoods. We offer vocational training in computer literacy, tailoring, mobile repair, and small business management. Each trainee receives hands-on instruction and post-training support including toolkits and micro-enterprise guidance.",
    icon: <Laptop size={28} />,
    category: "Livelihood",
    beneficiaries: 850,
    location: "Urban Centers",
    date: "2021 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 6,
    title: "Women Empowerment",
    description:
      "Supporting women through education, microfinance, and entrepreneurship training.",
    longDescription:
      "This comprehensive program addresses multiple barriers to women's economic participation. We provide literacy classes, financial literacy training, and small business incubation. Through partnerships with microfinance institutions, we help women access capital to start or expand their businesses, fostering long-term economic independence.",
    icon: <Users size={28} />,
    category: "Gender Equality",
    beneficiaries: 620,
    location: "Rural Areas",
    date: "2022 - Present",
    status: "ongoing",
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
];

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Our Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id.toString(),
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
const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
    <div className="text-orange-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projectData.find((p) => p.id === projectId);

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
            label="Beneficiaries"
            value={project.beneficiaries.toLocaleString()}
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
                    {project.beneficiaries.toLocaleString()}+
                  </p>
                  <p className="text-sm text-gray-600">Lives Impacted</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">100%</p>
                  <p className="text-sm text-gray-600">Donations to Cause</p>
                </div>
              </div>
            </div>
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-3 mt-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Want to Learn More?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Contact our program coordinator for detailed information about
                this project.
              </p>
              <Link
                href="/contact"
                className="block text-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                Contact Us →
              </Link>
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
              <button className="w-full border-2 border-orange-600 text-orange-600 py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors font-semibold">
                Volunteer
              </button>
            </div>

            {/* Share Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share This Project
              </h3>
              <div className="flex gap-3">
                {["Facebook", "Twitter", "LinkedIn"].map((platform) => (
                  <button
                    key={platform}
                    className="flex-1 bg-white py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-600 hover:text-white transition-colors border border-gray-200"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
