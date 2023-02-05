/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/general/Button";

const Hero: FC = () => {
  return (
    <div className="bg-primary-light">
      <div className="sm:container pt-12 pb-8 2xl:px-0 mx-auto mt-28">
        <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 lg:py-12 rounded-3xl relative">
          <div className="flex flex-col justify-between h-full basis-[50%] my-auto px-8 pt-10 lg:pt-0">
            <p className="font-bold text-xs sm:text-base lg:text-xl uppercase text-primary font-serif">
              Hi, my name is
            </p>
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl mt-3 text-secondary">
              Ameh Abraham.
            </h1>
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-black leading-snug font-serif">
              I build and design software.
            </h1>
            <p className="text-base lg:text-2xl text-text-300 mt-4 lg:mt-8">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products.
            </p>
            <div className="flex sm:flex-row mt-8 gap-6">
              <Button className="bg-secondary hover:bg-secondary/70 transition-all font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-lg sm:text-xl rounded-full">
                Hire Me
              </Button>
              <Button className="border border-primary hover:bg-primary/20 transition-all px-8 sm:px-11 py-3 text-black font-semibold leading-7 text-lg sm:text-xl rounded-full">
                Let's talk
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="basis-full lg:basis-[20%]"
              src="/img/abraham.png"
              alt="doctors-3d"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-row gap-x-2">
            <hr className="w-20 mt-4 h-1 border bg-black" />
            <p className="font-sans font-bold text-2xl ml-2 text-secondary">
              <span className="text-black font-serif">My </span>recent projects.
            </p>
          </div>
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-2xl font-serif">50+</h5>
              <p className="text-2xl">Projects Completed</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-2xl font-serif">10+</h5>
              <p className="text-2xl">Design Projects</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-2xl font-serif">30+</h5>
              <p className="text-2xl">Dev Projects</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-2xl font-serif">95.9%</h5>
              <p className="text-2xl">Satisfied clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
