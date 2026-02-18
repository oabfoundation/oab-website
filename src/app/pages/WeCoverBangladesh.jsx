"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export default function WeCoverBangladesh() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-6xl text-orange-500 p-2">Our Coverage Areas</h1>
      <LeafletMap />
    </div>
  );
}
