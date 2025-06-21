// src/components/ServicesSection.jsx
import React from "react";

import ServiceCard from "./ServiceCard";
import { services } from "../../../Data/serviceData";

const Services = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
             service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
