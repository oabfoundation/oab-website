"use client";

import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ onDistrictHover, onDistrictClick }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapInstanceRef.current && mapRef.current) {
      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current).setView([23.685, 90.3563], 7);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

   
      const districts = [
        { name: "Dhaka", coords: [23.8103, 90.4125], programs: 25 },
        { name: "Chittagong", coords: [22.3569, 91.7832], programs: 18 },
        { name: "Rajshahi", coords: [24.3745, 88.6042], programs: 15 },
        { name: "Khulna", coords: [22.8456, 89.5403], programs: 12 },
        { name: "Sylhet", coords: [24.8949, 91.8687], programs: 10 },
        { name: "Barisal", coords: [22.7010, 90.3535], programs: 8 },
        { name: "Rangpur", coords: [25.7439, 89.2752], programs: 14 },
        { name: "Mymensingh", coords: [24.7471, 90.4203], programs: 11 },
      ];

      // Add markers for each district
      districts.forEach((district) => {
        const marker = L.marker(district.coords, {
          icon: L.divIcon({
            className: 'custom-marker',
            html: `<div class="w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">${district.programs}</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })
        }).addTo(mapInstanceRef.current);

        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-orange-600">${district.name}</h3>
            <p class="text-sm">${district.programs} active programs</p>
            <p class="text-xs text-gray-500">Click for details</p>
          </div>
        `);

        marker.on('mouseover', () => {
          if (onDistrictHover) onDistrictHover(district.name);
        });

        marker.on('mouseout', () => {
          if (onDistrictHover) onDistrictHover(null);
        });

        marker.on('click', () => {
          if (onDistrictClick) onDistrictClick(district.name);
        });
      });

      // Add circle for coverage areas
      districts.forEach((district) => {
        L.circle(district.coords, {
          radius: 20000,
          color: '#ff5a00',
          fillColor: '#ff8c52',
          fillOpacity: 0.2,
          weight: 1
        }).addTo(mapInstanceRef.current);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [onDistrictHover, onDistrictClick]);

  return <div ref={mapRef} className="w-full h-[500px] rounded-lg z-0" />;
}