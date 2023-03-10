/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import Form from "@/components/general/Form";
import Link from "next/link";

const Contact: FC = () => {
  return (
    <div className="bg-white" id="contact-us">
      <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col lg:flex-row justify-between pb-7 lg:pb-14 pt-10 lg:pt-20 px-3 sm:px-14 lg:px-0 xl:px-20 gap-x-10 lg:gap-x-5 xl:gap-x-10 gap-y-28 rounded-[10px] sm:rounded-xl lg:rounded-3xl">
          <Form />
          <div className="flex flex-col lg:pr-10 my-auto basis-[45%]">
            <h3 className="text-black font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
              Let's
              <span className="font-sans text-secondary font-medium">
                {" "}
                Talk{" "}
              </span>
              about something special
            </h3>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
              <Image
                className="w-10 h-10 sm:w-14 sm:h-14"
                src="/img/phone-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <Link href="tel:+2349034509143" legacyBehavior>
                <a className="my-auto h-full">
                  <p className="text-secondary text-base sm:text-lg lg:text-2xl my-auto">
                    +234 903 450 9153
                  </p>
                </a>
              </Link>
            </div>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20 align-middle">
              <Image
                className="w-10 h-10 sm:w-14 sm:h-14"
                src="/img/mail-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <Link href="mailto:amehabraham811@gmail.com" legacyBehavior>
                <a className="my-auto h-full">
                  <p className="text-secondary text-base sm:text-lg lg:text-2xl break-all">
                    amehabraham811@gmail.com
                  </p>
                </a>
              </Link>
            </div>
            <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
              <Image
                className="w-10 h-10 sm:w-14 sm:h-14"
                src="/img/map-icon.svg"
                alt="phone icon"
                width={60}
                height={60}
              />
              <p className="text-secondary text-base sm:text-lg lg:text-2xl my-auto">
                75 Nsukka St, Garki 900110, Abuja, Federal Capital Territory,
                Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
