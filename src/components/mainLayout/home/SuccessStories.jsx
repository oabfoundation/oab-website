import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    name: "Mir Mohammad Ali ",
    title:
      "Assistant Professor Aquaculture Department Sher-Bangla Agricultural University",
    description:
      "OAB Foundation has been able to reach this position today because of the relentless efforts and hard work of the volunteers. This recognition has removed all our fatigue and given us new strength and inspiration. ",
    image: "https://i.ibb.co.com/KkP61Gb/Mohammad-Ali.jpg",
  },
  {
    name: "Sharif Jamil",
    title:
      "Member Secretary, Dharti Rakshai Amra (DHORA) Coordinator, Waterkeepers Bangladesh",
    description:
      "OAB dreams of change. But to turn this dream into reality, the two most important elements are consistency and time.",
    image: "https://i.ibb.co.com/1G0JFn5F/Sharif-Jamil.jpg",
  },
  {
    name: "Md Abdul Quayyum",
    title: "Head of Communication, UNDP Bangladesh",
    description:
      "My Golden Bengal, I love you. As a child of Bangladeshi soil, it is our pride and responsibility to represent our country with dignity on the global stage. Leadership, awareness, and ethical conduct of the youth are the key to our international success.",
    image: "https://i.ibb.co.com/zhJt0p81/Abdul-Quayyum.jpg",
  },
];

export default function SuccessStories() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Esteemed <span className="text-orange-600">feedback</span>
        </h2>
        <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
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
              <Image
                width={500}
                height={300}
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
    </div>
  );
}
