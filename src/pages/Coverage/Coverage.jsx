import React, { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import BangladeshMap from "./BangladeshMap";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

// Fix default marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const bangladeshCenter = [23.6850, 90.3563]

// Helper component to move map
function FlyToDistrict({ coords }) {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 14, { duration: 1.5 });
  }
  return null;
}



const Coverage = () => {
  const serviceCenters = useLoaderData()
  // console.log(serviceCenters)
  const [searchText, setSearchText] = useState('');
  const [activeCoords, setActiveCoords] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const district = serviceCenters.find(d =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };



  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">We are available in 64 districts</h1>


      {/* Map */}
      <div className="w-full h-[500px] rounded shadow-md overflow-hidden relative">


        {/* search  */}

        <form
          onSubmit={handleSearch}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex bg-gray-400"
        >
          <input
            type="text"
            placeholder="Search district..."
            className="flex-1 px-4 py-2 border rounded-l-md outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Go
          </button>
        </form>






        <MapContainer center={bangladeshCenter} zoom={7} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          <FlyToDistrict coords={activeCoords} />

          {/* Example marker: Dhaka */}
          {
            serviceCenters.map((center, idx) => <Marker
              key={idx}
              position={[center.latitude, center.longitude]}>
              <Popup autoOpen={center.district === activeDistrict}>
                <strong>{center.city} ({center.district})</strong><br />
                <strong> {center.covered_area}</strong><br />
                <em>Region: {center.region}</em><br />
              </Popup>
            </Marker>)
          }

          {/* You can add more district markers like this */}
        </MapContainer>
        <BangladeshMap />
      </div>
    </div>
  );
};


export default Coverage;