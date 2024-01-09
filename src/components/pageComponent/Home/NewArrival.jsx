import React from "react";
import Heading from "../../common/Heading";
import Product from "../../common/Product";
import NewProductOne from "../../../assets/Images/New-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const NewArrival = () => {
  return (
    <>
      <section className="new_arrival pt-3 lg:pt-5 pb-16 md:pb-22 lg:pb-32">
        <div className="container">
          <div className="heading pb:2 md:pb:4 lg:pb-6">
            <Heading title={"New Arrivals"} />
          </div>
          <div className="Product flex gap-6">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
              <SwiperSlide>
                <Product src={NewProductOne} showBadge={true} badgeTile="New" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
