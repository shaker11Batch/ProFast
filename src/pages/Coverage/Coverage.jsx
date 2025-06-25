import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
const Coverage = () => {
    const serviceCenters = useLoaderData()
    console.log(serviceCenters)
    return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">We are available in 64 districts</h1>
    
          {/* Map */}
          <div className="w-full h-[500px] rounded shadow-md overflow-hidden">
            <MapContainer center={bangladeshCenter} zoom={7} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />
    
              {/* Example marker: Dhaka */}
            {
                serviceCenters.map((center, idx) =>  <Marker 
                key={idx}
                position={[center.latitude, center.longitude]}>
                    <Popup>
                    <strong>{center.city} ({center.district})</strong><br />
                    <strong> {center.covered_area}</strong><br />
                <em>Region: {center.region}</em><br />
                    </Popup>
                  </Marker>)
            }
    
              {/* You can add more district markers like this */}
            </MapContainer>
            <BangladeshMap/>
          </div>
        </div>
      );
    };


export default Coverage;