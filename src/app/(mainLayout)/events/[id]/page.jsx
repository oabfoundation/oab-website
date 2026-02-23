import { notFound } from "next/navigation";
import {
  Calendar,
  Tag,
  MapPin,
  ArrowLeft,
  Share2,
  Clock,
  Info,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    id: "1",
    title: "Winter Blanket Distribution Program 2025",
    date: "15 January 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "OAB Foundation successfully reached underprivileged families across several districts to provide warmth during the winter season.",
    longDesc:
      "Our Winter Blanket Distribution Program is an annual flagship initiative. In 2025, we focused on the northern regions of Bangladesh where temperatures drop significantly. Our volunteers worked day and night to identify the most vulnerable families, including the elderly and children, ensuring they have the protection they need against the biting cold. Over 5,000 blankets were distributed across 12 districts.",
    category: "Impact",
    location: "Northern Bangladesh",
  },
  {
    id: "2",
    title: "Free Medical Camp Successfully Completed",
    date: "02 February 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "Our medical team provided essential healthcare services, screenings, and free medicine to rural communities in need.",
    longDesc:
      "The free medical camp provided specialized care in General Medicine, Pediatrics, and Ophthalmology. More than 800 patients received free consultations and medicine. We also conducted awareness sessions on hygiene and preventive healthcare to empower the local community for a healthier future.",
    category: "Healthcare",
    location: "Rural Gazipur",
  },
  {
    id: "3",
    title: "Ramadan Food Package Initiative",
    date: "10 March 2026",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
    desc: "Preparing for the holy month by ensuring that families have access to nutritious food and essential supplies.",
    longDesc:
      "To support fasting families during Ramadan, we distribute comprehensive food packages containing rice, oil, pulses, dates, and other essentials. This initiative aims to reduce the financial burden on low-income households, allowing them to observe the holy month with dignity and peace of mind.",
    category: "Humanitarian",
    location: "Dhaka Slum Areas",
  },
];

// Metadata generation (JavaScript format)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === id);

  if (!news) return { title: "News Not Found" };

  return {
    title: `${news.title} | OAB Foundation`,
    description: news.desc,
  };
}

// Static paths generation
export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id,
  }));
}

export default async function NewsDetailsPage({ params }) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Navigation */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-orange-600 mb-6 hover:translate-x-[-5px] transition-transform duration-300 font-medium"
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[550px] w-full mb-10">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="rounded-3xl object-cover shadow-2xl"
            priority
          />
          <div className="absolute top-6 left-6">
            <span className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              {news.category}
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
                <span className="text-base">{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-orange-600" />
                <span className="text-base">{news.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-orange-600" />
                <span className="text-base">Read: 4 min</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {news.title}
            </h1>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
                "{news.desc}"
              </p>
              <div className="text-gray-700 text-lg leading-loose space-y-4">
                {news.longDesc}
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
                className="w-full md:w-auto text-center bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-md"
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

            {/* Other News */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                More Updates
              </h3>
              <div className="space-y-6">
                {newsData
                  .filter((n) => n.id !== id)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
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
    </main>
  );
}
