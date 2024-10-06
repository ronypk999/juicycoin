import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/slider/care_1.png";
import image2 from "../assets/slider/care_2.png";
import image3 from "../assets/slider/care_3.png";
import image4 from "../assets/slider/care_4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="px-3">
          <h1 className="text-xl base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            ENJOY EXCLUSIVE BENEFITS <br /> ONLY FOR{" "}
            <span className="text-orange-400">$JUICE</span> HOLDERS.
          </h1>
          <p className="base-color text-center font-bold text-xl py-6">
            Squeeze two <span className="text-orange-400">$JUICE</span> with one
            orange
          </p>
        </div>
        <div className="px-3">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            style={{ paddingBottom: "150px" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1080: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="">
                <figure className="pb-3">
                  <img src={image1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                  <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    <span> Lifetime Health </span>
                    <span className="slider-text-shadow text-orange-400">
                      Screening Pass
                    </span>
                  </h2>
                  <p>
                    Provides annual comprehensive health screening services.
                    Through our healthcare partner network, holders can receive
                    professional health management services and personalized
                    health advice based on screening results.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="pb-3">
                <img src={image2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                  <span>Premium </span>
                  <span className="slider-text-shadow text-orange-400">
                    Massage Chair
                  </span>
                </h2>
                <p>
                  Provides a high-end massage chair with cutting-edge
                  technology. This massage chair helps relieve stress and relax
                  muscles, contributing to the overall well-being of holders.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="pb-3">
                <img src={image3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                  <span> Del Monte Lifetime </span>
                  <span className="slider-text-shadow text-orange-400">
                    Free Voucher
                  </span>
                </h2>
                <p>
                  Provides a voucher for lifetime free use of Del Monte
                  products. Through this, holders can enjoy high-quality orange
                  juice for free for life.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="pb-3">
                <img src={image4} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                  <span> Vitamin Lifetime </span>
                  <span className="slider-text-shadow text-orange-400">
                    Free Voucher
                  </span>
                </h2>
                <p>
                  As part of the ecosystem's health management program, holders
                  are regularly provided with customized comprehensive vitamin
                  sets. Adjusted according to individual health conditions and
                  needs, these vitamin sets support the long-term health
                  promotion of holders.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
