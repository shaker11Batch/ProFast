import React from 'react';
import { benefits } from '../../../Data/Features';

const Banifets = () => {
    return (
        <section className="py-12 px-4 bg-gray-100">
            <h3 className="text-center font-bold text-3xl my-4">Why Choose Us</h3>
        <div data-aos="fade-left" data-aos-duration="1000" className="max-w-7xl mx-auto  h-full">
          {benefits.map((card) => (
            <div
              key={card.id}
              className="flex bg-white shadow rounded-lg  h-full my-12"
            >
              {/* Image */}
              <div className="w-1/3 flex items-center justify-center p-4 bg-gray-100">
                <img
                  src={card.image}
                  alt=""
                  className="shadow "
                />
              </div>
  
              {/* Divider */}
              <div className="w-px border-l border-dashed border-gray-300 mx-4 hidden sm:block" />

  
              {/* Text Content */}
              <div className="flex-1 p-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Banifets;