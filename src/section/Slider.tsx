import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/slider/care_1.png";
import image2 from "../assets/slider/care_2.png";
import image3 from "../assets/slider/care_3.png";
// import image4 from "../assets/slider/care_4.png";
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
            }}
          >
            <SwiperSlide>
              <div className="">
                <figure className="pb-3">
                  <img src={image1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                  <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    <span> Relaxation </span>
                    <span className="slider-text-shadow text-orange-400">
                     Benefits
                    </span>
                  </h2>
                  <p>
                  As a JMT token holder, enjoy exclusive access to relaxation experiences, including discounts on massage services and 
wellness retreats. Unwind and rejuvenate with the perks that come with your tokens!
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
                  <span>Exclusive  </span>
                  <span className="slider-text-shadow text-orange-400">
                  Content
                  </span>
                </h2>
                <p>
                Gain access to special meme creation workshops and tutorials, designed to enhance your skills and creativity in the meme space.

                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="pb-3">
                <img src={image3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="p-6 bg-base-200 h-[275px] space-y-6 overflow-hidden">
                <h2 className="text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                  <span> Priority  </span>
                  <span className="slider-text-shadow text-orange-400">
                  Participation
                  </span>
                </h2>
                <p>
                Token holders receive priority entry to community events and contests, ensuring you’re always at the forefront of the fun!
                </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
