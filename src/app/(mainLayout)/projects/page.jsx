import { getProjects } from "@/app/api/projects/route";
import { BookOpen, Utensils, HeartPulse, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "Education Support",
    description:
      "Providing books, school materials, and scholarships to underprivileged students across Bangladesh.",
    icon: <BookOpen size={28} />,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 2,
    title: "Food Distribution",
    description:
      "Regular food packages distributed to low-income families and during emergencies.",
    icon: <Utensils size={28} />,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
  {
    id: 3,
    title: "Medical Aid",
    description:
      "Supporting patients with medical expenses and organizing free health camps.",
    icon: <HeartPulse size={28} />,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630646305_833813823044880_7833701592610946435_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ATPfcRcma9kQ7kNvwGS38V5&_nc_oc=AdlOsCza6vyUYUgrtvGOskG5XvjoKt4ITQg3i-IzDIxZ5KHf3UUQueK8zqP6j5xSDpw&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=gUtdtJs_szqVbKZ5jJeA4A&oh=00_AfsrGRNT8OfiJ95UnrPfpU8jVrzarbreMrthhUbElIGVZQ&oe=69A069F7",
  },
];
const Projects = () => {
  return (
    <div className="min-h-screen py-16 ">
      {/* {projects.map(p => <p key={p?._id}>{p.title}</p>)} */}
      <div className="max-w-7xl mx-auto px-6">
        {/* div Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Ongoing <span className="text-orange-600">Projects</span>
          </h2>
          <p className=" mt-2 text-lg md:text-xl">
            Making a meaningful impact through continuous community initiatives.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >
              {/* Card Image with gradient overlay */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl"></div>
              </div>

              <div className="bg-white p-6 rounded-b-3xl flex flex-col justify-between h-60">
                <div>
                  <div className="flex items-center gap-3 text-orange-500 mb-3">
                    {project.icon}
                    <h3 className="text-xl font-bold text-gray-800 leading-snug  group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={`/projects/${project?.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-orange-500 font-semibold group cursor-pointer transition-all duration-300 hover:translate-x-1 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
