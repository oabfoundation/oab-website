import React from 'react';
import Image from 'next/image';
import ImageWithFallback from '@/components/common/ImageWithFallback';

const Committee = () => {
  // Committee members data
  const members = [
    {
      id: 1,
      name: "John Doe",
      designation: "Chairman",
      image: "https://i.ibb.co.com/example1.jpg", // Valid ba invalid link
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "General Secretary",
      image: "", // Empty thakle fallback dekhabe
    },
    {
      id: 3,
      name: "Ahmed Ali",
      designation: "Treasurer",
      image: "https://i.ibb.co.com/example3.jpg",
    },
    // Aro member ekhane add korte paren
  ];

  const defaultImage = "https://i.ibb.co.com/p6Ds2H8S/IMG-20241121-WA0048.jpg";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Executive <span className="text-orange-600">Committee</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            The dedicated individuals behind our mission, working tirelessly to drive positive change in society.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden text-center"
            >
              {/* Member Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <ImageWithFallback
                  src={member.image && member.image.startsWith("http") ? member.image : defaultImage}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium text-sm mt-1 uppercase tracking-wider">
                  {member.designation}
                </p>
                
                {/* Social Links Placeholder (Optional) */}
                <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer transition-colors">
                    <span className="text-xs font-bold">FB</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer transition-colors">
                    <span className="text-xs font-bold">LN</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;