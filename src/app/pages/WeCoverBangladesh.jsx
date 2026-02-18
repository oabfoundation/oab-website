"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Circle, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import districtsData from "../../data/bd-district.json";
import L from "leaflet";

function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 9 });
    }
  }, []); 
  return null;
}

export default function WeCoverBangladesh() {
  const highlightDistricts = districtsData.districts.filter(d =>
    ["Dhaka", "Gazipur"].includes(d.name)
  );


  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-5xl font-bold text-orange-500 mb-2">Our Coverage Areas</h2>
      <p className="text-gray-600 mb-4">Currently serving major hubs in Bangladesh.</p>

      <MapContainer
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={true} 
        zoom={7}            
        center={[23.685, 90.3563]} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {highlightDistricts.map(d => (
          <Circle
            key={d.id}
            center={[parseFloat(d.lat), parseFloat(d.long)]}
            radius={20000} 
            pathOptions={{ color: "#d35400", fillColor: "#f39c12", fillOpacity: 0.4 }}
          >
            <Tooltip permanent direction="center" className="font-bold text-[#d35400]">
              {d.name}
            </Tooltip>
          </Circle>
        ))}

        {districtsData.districts.map(d => (
          <Circle
            key={"name-" + d.id}
            center={[parseFloat(d.lat), parseFloat(d.long)]}
            radius={0} 
            pathOptions={{ fillOpacity: 0, stroke: 0 }}
          >
            <Tooltip permanent direction="center" className="text-[#d35400] font-bold text-sm">
              {d.name}
            </Tooltip>
          </Circle>
        ))}


        <FitBounds points={highlightDistricts.map(d => [parseFloat(d.lat), parseFloat(d.long)])} />
      </MapContainer>
    </div>
  );
}
