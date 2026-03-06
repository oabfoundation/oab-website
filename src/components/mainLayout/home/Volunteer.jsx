import Link from "next/link";
import React from "react";

const Volunteer = () => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="mt-10 p-8 rounded-2xl bg-white border border-amber-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Become a Volunteer
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Join our mission and make a real difference.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-amber-200 transition-all active:scale-95 inline-block"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default Volunteer;
