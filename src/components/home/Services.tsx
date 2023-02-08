import Image from "next/image";
import { FC } from "react";

const Services: FC = () => {
  const services = [
    {
      id: 0o1,
      no: "01",
      header: "UI/UX Design",
      service: ["Web Design", "Mobile App Design"],
    },
    {
      id: 0o2,
      no: "02",
      header: "Development",
      service: ["Web Dev", "Mobile App Dev"],
    },
    {
      id: 0o3,
      no: "03",
      header: "Tutoring",
      service: ["Web Dev", "Mobile App Dev", "UI Design", "Programming"],
    },
  ];

  const Toolkit = [
    "/img/tools/html.svg",
    "/img/tools/css.svg",
    "/img/tools/javascript.svg",
    "/img/tools/react.svg",
    "/img/tools/boostrap.svg",
    "/img/tools/material-ui.svg",
    "/img/tools/next.svg",
    "/img/tools/node.svg",
    "/img/tools/github.svg",
    "/img/tools/figma.svg",
    "/img/tools/typescript.svg",
  ];
  return (
    <div className="bg-primary-light py-10">
      <div className="container py-24 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col lg:flex-row justify-between mt-5 gap-y-20 gap-x-28">
          <div className="flex flex-col basis-1/2">
            {services.map((data) => (
              <div key={data.id} className="flex flex-col w-full">
                <div className="flex flex-row gap-3">
                  <p className="font-bold text-3xl text-black">{data.no}</p>
                  <hr className="w-full my-auto text-black border border-black" />
                  <Image
                    src="/img/up-right-arrow.svg"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="my-8 ml-10">
                  <h3 className="font-bold text-3xl lg:text-4xl text-black">
                    {data.header}
                  </h3>
                  <div className="flex flex-row mt-5 gap-x-14 gap-y-5 flex-wrap">
                    {data.service.map((text, index) => (
                      <div key={index} className="flex flex-row gap-3">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                            fill="currentColor"
                            className="fill-secondary"
                          />
                          <path
                            d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                            fill="currentColor"
                            className="fill-white"
                          />
                        </svg>
                        <span className="text-black text-base sm:text-xl lg:text-2xl">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col basis-1/2 align-top">
            <h3 className="text-black font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
              Solving problems with this{" "}
              <span className="font-sans text-secondary font-bold">
                {" "}
                Services{" "}
              </span>
            </h3>
            <p className="text-black text-base sm:text-xl lg:text-2xl my-3">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a{" "}
              <span className="text-primary">start-up</span>, a huge
              corporation,
            </p>
            <h4 className="text-black text-3xl mt-8 font-bold">
              My Toolkit 💻
            </h4>
            <div className="grid grid-cols-6 gap-x-5 gap-y-8 mt-5">
              {Toolkit.map((data, index) => (
                <Image
                  key={index}
                  className="w-8 h-8 sm:w-14 sm:h-14"
                  src={data}
                  alt="phone icon"
                  width={70}
                  height={70}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
