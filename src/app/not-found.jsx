import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/common/BackButton";

const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Decorative Element */}
        <p className="text-8xl font-bold text-blue-600">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাইনি। আপনি হয়তো ভুল
          লিংকে প্রবেশ করেছেন। আবার চেষ্টা করুন।
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Primary Action */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            <Home size={18} />
            হোমে ফিরে যান
          </Link>

          {/* Secondary Action */}
          <BackButton>ফিরে যান</BackButton>
        </div>

        {/* Optional: Helpful links */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-medium text-blue-600 hover:underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
