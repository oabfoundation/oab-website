
import { Calendar, ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import Link from "next/link";
const Events =async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const limit = 6; 

  const baseUrl = process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://oabfoundation.org";

  const res = await fetch(
    `${baseUrl}/api/getEvents?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const eventsData = await res.json();
  const events = eventsData.success ? eventsData.data : [];
  const total = eventsData.total || 0;
  const totalPages = Math.ceil(total / limit);

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
          {events.map((event) => (
            <div
              key={event._id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-60 w-full overflow-hidden">
                {event.image ? (
  <ImageWithFallback
    width={400}
    height={300}
    src={
      event.image && event.image.startsWith("http") 
        ? event.image 
        : "https://i.ibb.co.com/p6Ds2H8S/IMG-20241121-WA0048.jpg"
    }
    alt={event.title || "Event Image"}
    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
  />
) : (
  <div className="bg-gray-200 h-56 w-full flex items-center justify-center text-gray-400 rounded-t-2xl">
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

               <h3 
  className="text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors truncate" 
  title={event.title}
>
  {event.title}
</h3>

<p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
  {event.desc || event.longDesc || "No description available."}
</p>

                {/* Read More Button */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/events/${event._id}`}
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
          <div className="flex justify-center mt-12 gap-4">
          <Link
            href={`?page=${page - 1}`}
            className={`px-4 py-2 border rounded ${page === 1 ? "opacity-50 pointer-events-none" : "hover:bg-gray-100"}`}
          >
            Prev
          </Link>
          <span className="px-4 py-2">Page {page} of {totalPages}</span>
          <Link
            href={`?page=${page + 1}`}
            className={`px-4 py-2 border rounded ${page >= totalPages ? "opacity-50 pointer-events-none" : "hover:bg-gray-100"}`}
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
