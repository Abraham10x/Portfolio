/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import Tabs from "./Tabs";

const Experience: FC = () => {
  return (
    <div className="bg-white py-28">
      <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <h3 className="text-black capitalize text-left font-bold text-2xl lg:3xl lg:text-5xl">
          where I've{" "}
          <span className="text-secondary font-sans capitalize font-medium">
            {" "}
            Worked{" "}
          </span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-between mt-10">
          <Tabs />
          <div className="flex flex-row align-top gap-x-10 basis-1/2">
            <div className="flex flex-col gap-y-10">
              <div className="w-72 shadow-2xl flex justify-center py-8">
                <Image
                  src="/img/hashtag.svg"
                  alt="hashtag logo"
                  width={170}
                  height={170}
                />
              </div>
              <div className="w-72 shadow-2xl flex justify-center py-8">
                <Image
                  src="/img/upwork.svg"
                  alt="hashtag logo"
                  width={170}
                  height={170}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-10 mt-10">
              <div className="w-72 shadow-2xl flex justify-center py-8">
                <Image
                  src="/img/technoxian.svg"
                  alt="hashtag logo"
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-72 shadow-2xl flex justify-center py-8">
                <Image
                  src="/img/jeliz.svg"
                  alt="hashtag logo"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
