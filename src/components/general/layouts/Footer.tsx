import Image from "next/image";
import { FC } from "react";
import FooterContact from "./FooterContact";

const Footer: FC = () => {
  return (
    <footer className="bg-primary-footer border-t-8 border-primary ">
      <div className="container pt-16 mx-auto pb-8 px-5 sm:px-10 2xl:px-0">
        <div className="flex flex-col sm:flex-row justify-between pb-10 text-center sm:text-left gap-y-10">
          <div>
            <figure>
              <div className="relative h-28 mx-auto sm:mx-0 sm:h-20 w-full">
                <Image
                  src="/logo.svg"
                  alt="company logo"
                  width={300}
                  height={300}
                />
              </div>
            </figure>
            <p className="text-gray-400 font-normal font-serif text-xl mt-12 w-full sm:w-1/2">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising. a start-up, a huge corporation,
            </p>
          </div>
          <div>
            <FooterContact />
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center border-lime-900">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-center uppercase text-xl font-sans">
          Designed and built by Ameh Abraham
        </p>
      </div>
    </footer>
  );
};

export default Footer;
