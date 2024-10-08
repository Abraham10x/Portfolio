import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import MobileData from "./MobileData";
import { Button } from "./Button";

const MobileWork: FC = () => {
  //   const display = WorksData.length;
  //   const [visible, setVisible] = useState(6);
  //   const Loadmore = () => {
  //     setVisible(visible + 9);
  //   };

  //   const Loadless = () => {
  //     setVisible(visible - 9);
  //   };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-center mt-24 relative">
        {MobileData.map((data) => (
          <>
            <div
              key={data.id}
              className="hover:shadow-xl relative hover:-translate-y-6 transition-all delay-150 duration-300 ease-in-out pb-4"
            >
              <div className="flex flex-col gap-5">
                <Image
                  data-hs-overlay={`#${data.modal}`}
                  src={data.mainimage}
                  alt={data.industry}
                  className="w-full h-72 object-cover cursor-pointer"
                  width={500}
                  height={500}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between px-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-xl lg:text-2xl font-bold text-black">
                        {data.title}
                      </p>
                      <p className="text-base sm:text-lg text-black">
                        {data.industry}
                      </p>
                    </div>
                    <div className="flex flex-row gap-4">
                      {data.github && (
                        <Link legacyBehavior href={data.github}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Image
                              className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                              src="/img/tools/github.svg"
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </a>
                        </Link>
                      )}
                      {data.figma && (
                        <Link legacyBehavior href={data.figma}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Image
                              className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                              src="/img/tools/figma.svg"
                              alt="icon"
                              width={25}
                              height={25}
                            />
                          </a>
                        </Link>
                      )}
                      {data.live && (
                        <Link legacyBehavior href={data.live}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Image
                              className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                              src="/img/up-right-arrow.svg"
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </a>
                        </Link>
                      )}
                      {data.playstore && (
                        <Link legacyBehavior href={data.playstore}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Image
                              className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                              src="/img/playstore.svg"
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </a>
                        </Link>
                      )}
                      {data.applestore && (
                        <Link legacyBehavior href={data.applestore}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Image
                              className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                              src="/img/apple.svg"
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 px-3">
                    {data.tools.map((tech) => (
                      <p
                        key={tech.image}
                        className="text-gray-500 text-sm sm:text-base"
                      >
                        {tech.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              id={data.modal}
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl ]">
                  <div className="flex justify-between items-center py-7 px-5 sm:px-10 border-b">
                    <h3 className="font-bold text-xl sm:text-3xl text-black">
                      Project Description
                    </h3>
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                      data-hs-overlay={`#${data.modal}`}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3.5 h-3.5"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="pb-4 overflow-y-auto">
                    <Swiper
                      slidesPerView={1}
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
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                      }}
                      modules={[Navigation, Pagination, Autoplay]}
                      className="mySwiper relative"
                    >
                      {data.slider.map((image) => (
                        <SwiperSlide key={image}>
                          <div className="mt-0">
                            <div className="flex flex-row">
                              <Image
                                src={image}
                                alt={data.industry}
                                className="w-full h-full sm:h-[35rem]"
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="space-y-4 px-5 sm:px-10 mt-5 sm:mt-0">
                      <div className="flex flex-row justify-between gap-6">
                        <h3 className="text-xl sm:text-3xl font-semibold text-black">
                          {data.title}
                        </h3>
                        <div className="flex flex-row gap-3">
                          <div className="flex flex-row gap-4">
                            {data.github && (
                              <Link legacyBehavior href={data.github}>
                                <a target="_blank" rel="noopener noreferrer">
                                  <Image
                                    className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                                    src="/img/tools/github.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                  />
                                </a>
                              </Link>
                            )}
                            {data.figma && (
                              <Link legacyBehavior href={data.figma}>
                                <a target="_blank" rel="noopener noreferrer">
                                  <Image
                                    className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                                    src="/img/tools/figma.svg"
                                    alt="icon"
                                    width={25}
                                    height={25}
                                  />
                                </a>
                              </Link>
                            )}
                            {data.playstore && (
                              <Link legacyBehavior href={data.playstore}>
                                <a target="_blank" rel="noopener noreferrer">
                                  <Image
                                    className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                                    src="/img/playstore.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                  />
                                </a>
                              </Link>
                            )}
                            {data.applestore && (
                              <Link legacyBehavior href={data.applestore}>
                                <a target="_blank" rel="noopener noreferrer">
                                  <Image
                                    className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                                    src="/img/apple.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                  />
                                </a>
                              </Link>
                            )}
                            {data.live && (
                              <Link legacyBehavior href={data.live}>
                                <a target="_blank" rel="noopener noreferrer">
                                  <Image
                                    className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                                    src="/img/up-right-arrow.svg"
                                    alt="icon"
                                    width={40}
                                    height={40}
                                  />
                                </a>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl mb-4 font-bold text-black">
                          Project Summary
                        </h3>
                        {data.summary}
                      </div>

                      <div className="flex flex-col gap-3 pt-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">
                          Technologies Used
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-start mt-1 gap-x-3 gap-y-5">
                          {data.tools.map((tool) => (
                            <div
                              key={tool.title}
                              className="bg-white border border-primary hover:text-white text-black hover:bg-primary transition-all delay-150 duration-300 ease-in-out flex flex-row justify-center rounded-md gap-3 w-44 py-2"
                            >
                              <Image
                                src={tool.image}
                                alt="icon"
                                width={40}
                                height={40}
                              />
                              <p className="text-base sm:text-lg my-auto">
                                {tool.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 pt-7">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">
                          Collaborators
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-start mt-1">
                          {data.collaborators.map((people) => (
                            <div key={people.image} className="flex flex-row">
                              <Image
                                className="rounded-full object-cover"
                                src={people.image}
                                alt={people.username}
                                width={70}
                                height={70}
                              />
                              <div className="flex-col ml-4 my-auto">
                                <Link legacyBehavior href={people.linkedin}>
                                  <a target="_blank" rel="noopener noreferrer">
                                    <h4 className="text-secondary hover:text-secondary/80 hover:scale-105 transition-all delay-150 duration-300 ease-in-out font-bold text-sm sm:text-base lg:text-lg">
                                      {people.username}
                                    </h4>
                                  </a>
                                </Link>
                                <p className="text-black font-normal text-xs sm:text-sm lg:text-base mt-1">
                                  {people.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hs-dropdown-toggle flex justify-end mt-5 items-center gap-x-2 py-5 px-5 sm:px-10 border-t border-gray-300">
                    {data.playstore && (
                      <Link legacyBehavior href={data.playstore}>
                        <a target="_blank" rel="noopener noreferrer">
                          <Image
                            className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                            src="/img/playstore.svg"
                            alt="icon"
                            width={40}
                            height={40}
                          />
                        </a>
                      </Link>
                    )}
                    {data.applestore && (
                      <Link legacyBehavior href={data.applestore}>
                        <a target="_blank" rel="noopener noreferrer">
                          <Image
                            className="hover:scale-110 hover:-translate-y-1 transition-all delay-150 duration-300 ease-in-out"
                            src="/img/apple.svg"
                            alt="icon"
                            width={40}
                            height={40}
                          />
                        </a>
                      </Link>
                    )}
                    {data.live ? (
                      <a
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent hover:scale-110 hover:-translate-y-1 delay-150 duration-300 ease-in-out font-semibold bg-secondary text-white hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all text-sm0"
                        href={data.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site
                      </a>
                    ) : data.figma ? (
                      <a
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent hover:scale-110 hover:-translate-y-1 delay-150 duration-300 ease-in-out font-semibold bg-secondary text-white hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all text-sm0"
                        href={data.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Design
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <div className="mx-auto flex justify-center mt-28">
        {visible < display ? (
          <Button
            className="bg-secondary hover:bg-secondary/70 hover:scale-110 transition delay-150 duration-300 ease-in-out font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-lg sm:text-xl rounded-md"
            onClick={Loadmore}
          >
            Show More
          </Button>
        ) : (
          <Button
            className="bg-secondary hover:bg-secondary/70 hover:scale-110 transition delay-150 duration-300 ease-in-out font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-lg sm:text-xl rounded-md"
            onClick={Loadless}
          >
            Show Less
          </Button>
        )}
      </div> */}
    </div>
  );
};

export default MobileWork;
