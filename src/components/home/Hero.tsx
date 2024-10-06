/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/general/Button";
import RecentWork from "./RecentWork";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="bg-primary-light">
      <div className="container pt-10 sm:pt-14 px-5 sm:px-10 pb-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 gap-y-24 gap-x-14 lg:py-12 rounded-3xl relative">
          <div className="flex flex-col justify-between h-full basis-[50%] my-auto pt-10 lg:pt-0">
            <p className="font-bold text-base sm:text-lg lg:text-xl uppercase text-primary font-serif">
              Hi, my name is
            </p>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-secondary">
              Ameh Abraham.
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-snug font-serif">
              I build and design software.
            </h1>
            <p className="text-base text-black sm:text-xl lg:text-2xl text-text-300 mt-4 lg:mt-8">
              I'm a software developer with a passion for creating intuitive and
              efficient technology solutions. I thrive in collaborative
              environments, working with cross-functional teams to bring
              projects from concept to launch.
            </p>
            <div className="flex sm:flex-row mt-8 gap-6">
              <Link href="/resume/resume.pdf" legacyBehavior>
                <a
                  rel="noreferer noopener"
                  target="_blank"
                  type="application/pdf"
                >
                  <Button className="bg-secondary hover:bg-secondary/70 hover:scale-110 transition delay-150 duration-300 ease-in-out font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-lg sm:text-xl rounded-full">
                    Resume
                  </Button>
                </a>
              </Link>
              <Link legacyBehavior href="mailto:amehabraham811@gmail.com">
                <a>
                  <Button className="border border-primary hover:bg-primary/20 hover:scale-110 transition delay-150 duration-300 ease-in-out px-8 sm:px-11 py-3 text-black font-semibold leading-7 text-lg sm:text-xl rounded-full">
                    Let's talk
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative basis-[50%] flex justify-center lg:justify-end">
            <div>
              <Image
                className="basis-full lg:basis-[20%] sm:mx-auto lg:mx-0"
                src="/img/abraham.png"
                alt="Ameh Abraham"
                width={600}
                height={600}
              />
              <Image
                className="w-6 sm:w-12 absolute top-12 sm:top-20 left-16 sm:left-44 lg:left-16 xl:left-28 2xl:left-56"
                src="/img/hero/figma.svg"
                alt="figma logo"
                width={35}
                height={35}
              />
              <Image
                className="absolute w-10 sm:w-16 top-12 sm:top-24 right-16 sm:right-40 lg:right-16 xl:right-28"
                src="/img/hero/react.svg"
                alt="react logo"
                width={55}
                height={55}
              />
              <Image
                className="absolute w-9 sm:w-16 bottom-32 sm:bottom-60 left-8 sm:left-32 lg:left-16 2xl:left-40"
                src="/img/hero/typescript.svg"
                alt="typescript logo"
                width={50}
                height={50}
              />
              <Image
                className="absolute w-9 sm:w-16 bottom-32 sm:bottom-60 right-10 sm:right-36 lg:right-20 xl:right-16"
                src="/img/hero/javascript.svg"
                alt="javascript logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-16">
          <div className="flex flex-row gap-x-2">
            <hr className="w-20 mt-4 h-1 border bg-black hidden sm:inline-block" />
            <h3 className="text-black capitalize text-left font-bold text-3xl sm:text-4xl lg:text-5xl">
              Recent{" "}
              <span className="text-secondary font-sans capitalize font-bold">
                {" "}
                Project{" "}
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly gap-x-10 gap-y-5 mt-10 lg:mt-0 text-black">
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-xl sm:text-2xl font-serif">50+</h5>
              <p className="text-xl sm:text-2xl">Projects Completed</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-xl sm:text-2xl font-serif">10+</h5>
              <p className="text-xl sm:text-2xl">Design Projects</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-xl sm:text-2xl font-serif">30+</h5>
              <p className="text-xl sm:text-2xl">Dev Projects</p>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-xl sm:text-2xl font-serif">
                95.9%
              </h5>
              <p className="text-xl sm:text-2xl">Satisfied clients</p>
            </div>
          </div>
        </div>
        <RecentWork />
      </div>
    </div>
  );
};

export default Hero;
