import { FC } from "react";
import Image from "next/image";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import TestimonialData from "./TestimonialData";

const Testimonial: FC = () => {
  return (
    <div className="mt-8 bg-primary-light">
      <div className="container px-5 sm:px-10 mx-auto py-20 lg:py-36">
        <h3 className="text-black capitalize text-left font-bold text-3xl sm:text-4xl lg:text-5xl">
          what my clients{" "}
          <span className="text-secondary font-sans capitalize font-medium">
            say
          </span>
        </h3>
        <p className="text-black capitalize text-base w-full sm:w-4/5 lg:w-[40%] sm:text-xl lg:text-2xl mt-4 text-left">
          I believe in open and effective communication, ensuring that my
          clients are fully informed and involved in every stage of the
          development process.
        </p>

        <Swiper
          // slidesPerView={2}
          // spaceBetween={30}
          // slidesPerGroup={3}
          // loop={true}
          // loopFillGroupWithBlank={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper relative"
        >
          {TestimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="p-8 border border-white bg-white rounded-xl flex flex-col gap-6 mt-20 mx-5 sm:mx-1 xl:mx-3 2xl:mx-10">
                <div className="flex flex-row gap-4">
                  <Image
                    className=""
                    src="/img/quote-icon.svg"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <hr className="w-full my-auto" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base capitalize text-black">
                  {data.text}
                </p>
                <div className="flex flex-row">
                  <Image
                    src={data.image}
                    alt={data.username}
                    width={80}
                    height={80}
                  />
                  <div className="flex-col ml-4 my-auto">
                    <h4 className="text-secondary font-bold text-sm sm:text-base lg:text-lg">
                      {data.username}
                    </h4>
                    <p className="text-black font-normal text-xs sm:text-sm lg:text-base mt-1">
                      {data.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
