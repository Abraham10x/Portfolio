/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import Form from "@/components/general/Form";

const Contact: FC = () => {
  return (
    <div className="bg-white">
      <div
        className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10"
        id="contact-us"
      >
        <div className="flex flex-col lg:flex-row justify-between pb-7 lg:pb-14 pt-10 lg:pt-20 px-3 sm:px-14 lg:px-20 gap-10 rounded-[10px] sm:rounded-xl lg:rounded-3xl">
          <Form />
          <div className="flex flex-col lg:pr-10 my-auto basis-[45%]">
            <h3 className="text-black font-serif font-bold text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
              Let's
              <span className="font-sans text-secondary font-medium">
                {" "}
                Talk{" "}
              </span>
              about something special
            </h3>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
              <Image
                className="w-8 h-8 sm:w-14 sm:h-14"
                src="/img/phone-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <p className="text-secondary text-sm sm:text-xl lg:text-2xl my-auto">
                +1 470-336-0611
              </p>
            </div>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
              <Image
                className="w-8 h-8 sm:w-14 sm:h-14"
                src="/img/mail-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <p className="text-secondary text-sm sm:text-xl lg:text-2xl my-auto">
                Contact@stabledoc.com
              </p>
            </div>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
              <Image
                className="w-8 h-8 sm:w-14 sm:h-14"
                src="/img/map-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <p className="text-secondary text-sm sm:text-xl lg:text-2xl my-auto">
                3379 Peachtree Road NE (Buckhead), Suite 555 Atlanta, GA 30326,
                USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
