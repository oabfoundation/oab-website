import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    name: "Amina Khatun",
    title: "Scholarship Beneficiary",
    description:
      "With the support of OAB Foundation, I was able to continue my education and achieve my dream of becoming a teacher.",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
  },
  {
    name: "Rahim Uddin",
    title: "Medical Camp Beneficiary",
    description:
      "The free medical camp organized by OAB Foundation helped me receive treatment that I could not afford before.",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
  },
  {
    name: "Fatema Begum",
    title: "Relief Support Recipient",
    description:
      "During the flood crisis, OAB Foundation provided food and essential supplies that saved our family.",
    image:
      "https://oabfoundation.org/wp-content/uploads/2025/06/photo_2025-06-01_23-35-00-768x578.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section className="my-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Success <span className="text-orange-600">Stories</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real lives transformed through the dedication and support of OAB
            Foundation.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-orange-500 transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
                  <Quote size={20} className="text-orange-600" />
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-gray-600 text-sm italic leading-relaxed mb-4">
                  "{story.description}"
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {story.name}
                </h3>
                <span className="text-sm text-orange-600 font-medium">
                  {story.title}
                </span>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/events"
                  className="block w-full py-2 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/events"
            className="py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white inline-flex items-center gap-2 group rounded-full transition duration-300"
          >
            Explore All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
