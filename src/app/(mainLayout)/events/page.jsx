import React from "react";
import { Quote } from "lucide-react";
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
const Events = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Successful <span className="text-orange-600">Events</span>
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
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-orange-500 transition duration-300 overflow-hidden"
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

              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{story.description}"
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {story.name}
                </h3>
                <span className="text-sm text-orange-600">{story.title}</span>
              </div>
              <Link
                href="/events"
                className="py-2 px-3 bg-orange-500 rounded-2xl text-center block mb-10"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
