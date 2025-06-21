import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from "../../../Data/review";

const ClientReview = () => {
    return (
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Clients Say</h2>
  
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {reviews.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-gray-800 mb-2">{client.name}</h4>
                  <p className="text-gray-600 text-sm">{client.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default ClientReview;