"use client";
import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const dhaka = [23.8103, 90.4125];
  const gazipur = [24.0023, 90.4264];

  return (
    <MapContainer
      center={[23.685, 90.3563]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle center={dhaka} radius={20000} pathOptions={{ color: "red" }}>
        <Tooltip>Dhaka</Tooltip>
      </Circle>

      <Circle center={gazipur} radius={15000} pathOptions={{ color: "blue" }}>
        <Tooltip>Gazipur</Tooltip>
      </Circle>
    </MapContainer>
  );
}
