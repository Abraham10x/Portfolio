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
    {
      id: 1,
      toolname: "HTML5",
      icon: "/img/tools/html.svg",
    },
    {
      id: 2,
      toolname: "CSS3",
      icon: "/img/tools/css.svg",
    },
    {
      id: 3,
      toolname: "JAVASCRIPT",
      icon: "/img/tools/javascript.svg",
    },
    {
      id: 4,
      toolname: "REACT",
      icon: "/img/tools/react.svg",
    },
    {
      id: 5,
      toolname: "BOOSTRAP",
      icon: "/img/tools/boostrap.svg",
    },
    {
      id: 6,
      toolname: "MUI",
      icon: "/img/tools/material-ui.svg",
    },
    {
      id: 7,
      toolname: "NEXT.JS",
      icon: "/img/tools/next.svg",
    },
    {
      id: 8,
      toolname: "REDUX",
      icon: "/img/tools/redux.svg",
    },
    {
      id: 9,
      toolname: "GITHUB",
      icon: "/img/tools/github.svg",
    },
    {
      id: 10,
      toolname: "FIGMA",
      icon: "/img/tools/figma.svg",
    },
    {
      id: 11,
      toolname: "TYPESCRIPT",
      icon: "/img/tools/typescript.svg",
    },
    {
      id: 12,
      toolname: "TAILWIND",
      icon: "/img/tools/tailwind.svg",
    },
  ];
  return (
    <div className="bg-primary-light py-10" id="services">
      <div className="container py-24 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col lg:flex-row justify-between mt-5 gap-y-20 gap-x-28">
          <div className="flex flex-col basis-1/2">
            {services.map((data) => (
              <div key={data.id} className="flex flex-col w-full">
                <div className="flex flex-row gap-3">
                  <p className="font-bold text-3xl text-black">{data.no}</p>
                  <hr className="w-full my-auto text-black border bg-black border-black" />
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
              My goal is to continuously learn and stay current with the latest
              technologies, to provide the best possible{" "}
              <span className="text-primary">user experience</span> for my
              clients and end-users.
            </p>
            <h4 className="text-black text-3xl mt-8 font-bold">
              My Toolkit 💻
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-5 gap-y-8 mt-5">
              {Toolkit.map((data, index) => (
                <div key={index} className="flex flex-col gap-3 align-middle">
                  <Image
                    className="w-8 h-8 sm:w-14 sm:h-14 mx-auto"
                    src={data.icon}
                    alt="phone icon"
                    width={70}
                    height={70}
                  />
                  <p className="text-gray-500 text-sm text-center">
                    {data.toolname}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
