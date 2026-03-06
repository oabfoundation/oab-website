import { getEvents } from "@/app/api/events/route";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, Share2, Clock, Info } from "lucide-react";
import BackText from "@/components/common/BackText";

// Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await getEvents();
  const eventsList = res.success ? res.data : [];
  const events = eventsList.find((n) => n._id === id);
  if (!events) return { title: "events Not Found" };

  return {
    title: `${events.title} | OAB Foundation`,
    description: events.desc,
  };
}
// Static paths generation
export async function generateStaticParams() {
  const res = await getEvents();
  const eventsList = res.success ? res.data : [];
  return eventsList.map((events) => ({
    id: events._id.toString(),
  }));
}

const EventDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await getEvents();
  const events = res.success ? res.data : [];
  const event = events.find((n) => n._id === id);

  return (
    <div className="min-h-screen pt-20">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <BackText>Go Back</BackText>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[550px] w-full mb-10">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="rounded-3xl object-cover shadow-2xl"
            priority
          />
          <div className="absolute top-6 left-6">
            <span className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              {event.category}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 pb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 items-center text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-orange-600" />
                <span className="text-base">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-orange-600" />
                <span className="text-base">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-orange-600" />
                <span className="text-base">Read: 4 min</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {event.title}
            </h1>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
                "{event.desc}"
              </p>
              <div className="text-gray-700 text-lg leading-loose space-y-4">
                {event.longDesc}
              </div>
            </div>

            {/* Donation/Call to Action */}
            <div className="mt-4 p-3 bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-4 rounded-2xl text-white shadow-lg">
                  <Info size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Support This Cause
                  </h3>
                  <p className="text-gray-600">
                    Your contribution helps us reach more families.
                  </p>
                </div>
              </div>
              <Link
                href="/donate"
                className="w-full md:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold  transition-all shadow-md"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Share */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Share2 size={20} className="text-orange-600" />
                Share Story
              </h3>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl font-medium bg-orange-600 hover:bg-orange-700 text-white transition-all cursor-pointer">
                  Facebook
                </button>
                <button className="w-full py-3 rounded-xl font-medium bg-orange-600 hover:bg-orange-700 text-white transition-all cursor-pointer">
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Other event */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                More Updates
              </h3>
              <div className="space-y-6">
                {events
                  .filter((n) => n._id !== id)
                  .slice(0, 3)
                  .map((item) => (
                    <Link
                      key={item._id}
                      href={`/news/${item._id}`}
                      className="group block border-b border-gray-50 pb-4 last:border-0"
                    >
                      <p className="text-xs text-orange-600 font-bold mb-2 uppercase tracking-tighter">
                        {item.category}
                      </p>
                      <h4 className="text-base font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default EventDetailsPage;
