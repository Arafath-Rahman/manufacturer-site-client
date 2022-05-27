import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const AroundWorld = () => {
  return (
    <div className="mb-16">
      <div>
        <h2
          className="text-center text-4xl font-bold mb-12"
        >
          WE HAVE BEEN AROUND THE WORLD
        </h2>
      </div>
      <div>
        <MapContainer
          center={[31.60219952376717, -99.17757230470471]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[34.212306306528916, -106.12207983271202]}>
            <Popup>New Mexico, USA</Popup>
          </Marker>
          <Marker position={[36.11503093941732, -97.83509607223839]}>
            <Popup>Oaklahoma, USA</Popup>
          </Marker>
          <Marker position={[32.81172831966089, -96.7436577373765]}>
            <Popup>Dallas, Texus, USA</Popup>
          </Marker>
          <Marker position={[29.474774039763588, -98.56794647010544]}>
            <Popup>San Antonio, US</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AroundWorld;
