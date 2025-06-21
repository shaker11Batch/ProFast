import React from 'react';
import locations from '../../../assets/location-merchant.png'
const BeMerChant = () => {
    return (
        <div data-aos="flip-up" className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl p-4 md:p-20 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={locations}
          />
          <div>
            <h1 className="text-5xl font-bold text-amber-50">Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className="py-6 text-amber-50">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
            <button className="btn btn-primary text-black rounded-full mr-4">Become A Merchant</button>
            <button className="btn btn-outline text-primary rounded-full hover:text-black">Become A Merchant</button>
          </div>
        </div>
      </div>
    );
};

export default BeMerChant;