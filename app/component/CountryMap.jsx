"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});




function CountryMap({ latlng, name }) {
  if (!latlng) return null;

  return (
    <MapContainer
      center={latlng}
      zoom={5}
      style={{ height: "100%", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={latlng}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default CountryMap;