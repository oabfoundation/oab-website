import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getEvents } from "@/app/api/events/route";
const newsData = [
  {
    id: "1",
    title: "Manifesto Talk: Youth, Environment and Climate",
    date: "31 May 2025",
    image:
      "https://i.ibb.co.com/GzcTkMQ/Whats-App-Image-2025-07-06-at-20-42-18-95475630.jpg",
    desc: "A significant dialogue titled 'Road to Green Manifesto' focusing on political manifestos regarding youth and climate action.",
    longDesc:
      "The 'Manifesto Talk' served as a critical platform for 'Dialogue on Political Manifesto' with a specific focus on Youth, Environment, and Climate. Held at the Department of Environment, this day-long event aimed to bridge the gap between young climate activists and political decision-makers. Participants discussed integrating environmental sustainability and youth-centric climate policies into national political agendas to ensure a greener future.",
    category: "Policy & Environment",
    location: "Department of Environment, Agargaon",
  },
  {
    id: "2",
    title: "Energy Talk: Youth for Just Transition",
    date: "20 June 2025",
    image:
      "https://i.ibb.co.com/jPWPzFNK/Whats-App-Image-2025-07-06-at-20-42-19-54a33708.jpg",
    desc: "A dynamic seminar focused on engaging the youth in discussions about sustainable energy and a just transition for the future.",
    longDesc:
      "The 'Energy Talk: Youth for Just Transition' event brought together students, activists, and experts to discuss the shift toward renewable energy. Held at the Liberation War Museum, the program featured insightful dialogues on how the younger generation can lead the movement for climate justice and energy security. Participants explored the socio-economic impacts of energy policies and the importance of ensuring a fair transition for all communities.",
    category: "Environment & Energy",
    location: "Q Auditorium, Liberation War Museum, Agargaon, Dhaka",
  },
  {
    id: "3",
    title: "Ramadan Food Package Initiative",
    date: "10 March 2026",
    image: "https://i.ibb.co.com/KSGmtdQ/food.jpg",
    desc: "Preparing for the holy month by ensuring that families have access to nutritious food and essential supplies.",
    longDesc:
      "To support fasting families during Ramadan, we distribute comprehensive food packages containing rice, oil, pulses, dates, and other essentials. This initiative aims to reduce the financial burden on low-income households, allowing them to observe the holy month with dignity and peace of mind.",
    category: "Humanitarian",
    location: "Dhaka Slum Areas",
  },
];
const Events = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest <span className="text-orange-600">Events</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-lg md:text-xl text-gray-600">
            We believe in sharing our journey with you. Stay updated with our
            ongoing programs, recent successes, and upcoming humanitarian
            efforts.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-60 w-full overflow-hidden">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-400 rounded-t-2xl">
                    No Image
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                    {event.category || "Event"}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                  <Calendar size={14} className="text-orange-500" />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {event.desc || event.longDesc || "No description available."}
                </p>

                {/* Read More Button */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors group/btn"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
