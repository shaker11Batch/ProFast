// src/components/ClientLogoSlider.jsx
import React from "react";
import logo1 from "../../../assets/brands/amazon.png"
import logo2 from "../../../assets/brands/amazon_vector.png"
import logo3 from "../../../assets/brands/casio.png"
import logo4 from "../../../assets/brands/moonstar.png"
import logo5 from "../../../assets/brands/randstad.png"
import logo6 from "../../../assets/brands/start.png"
import logo7 from "../../../assets/brands/start-people 1.png"
import Marquee from "react-fast-marquee";


const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogosMarquees = () => {
  return (
    <section className="py-10 bg-white mb-16">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Trusted by Leading Brands
    </h2>

    <Marquee speed={40} gradient={false}>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`client-logo-${index}`}
          className="h-6 mx-24 object-contain"
        />
      ))}
    </Marquee>
  </section>
  );
};

export default ClientLogosMarquees;
