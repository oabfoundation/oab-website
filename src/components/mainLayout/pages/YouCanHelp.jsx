"use client";

import { HandCoins, Users, HeartHandshake, Share2 } from "lucide-react";

const waysToHelp = [
  {
    icon: HandCoins,
    title: "Make a Donation",
    description:
      "Your financial contribution helps us support education, healthcare, and relief initiatives.",
  },
  {
    icon: Users,
    title: "Become a Volunteer",
    description:
      "Join our volunteer team and actively participate in community development programs.",
  },
  {
    icon: HeartHandshake,
    title: "Partner With Us",
    description:
      "Collaborate with OAB Foundation to create sustainable and meaningful impact.",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    description:
      "Help raise awareness by sharing our mission and initiatives within your network.",
  },
];

export default function HowYouCanHelp() {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            How You Can <span className="text-orange-600">Help</span>
          </h2>
          <p className="mt-4 text-gray-600">
            There are several ways you can contribute to OAB Foundation and
            become part of positive change.
          </p>
        </div>

        {/* List Items */}
        <div className="space-y-8">
          {waysToHelp.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-6 border-b pb-6 last:border-none"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}