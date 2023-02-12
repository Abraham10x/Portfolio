import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full top-0 left-0 bg-primary-light sticky sm:px-10 z-50 bg-opacity-100 lg:bg-opacity-[0.93]">
      <div className="md:flex items-center justify-between py-4 px-7 sm:px-0 xl:container mx-auto">
        <Link legacyBehavior href="/">
          <figure>
            <Image
              className="w-1/2 md:w-full z-[999] cursor-pointer"
              alt="logo"
              src="/logo.svg"
              width={500}
              height={500}
            />
          </figure>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? (
            <button className="header-nav-toggle off-nav-is-active mt-2">
              <span className="screen-reader"></span>
              <span className="hamburger">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          ) : (
            <button className="header-nav-toggle mt-2">
              <span className="screen-reader"></span>
              <span className="hamburger">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[2] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[4.8rem] sm:top-[5rem] bg-white" : "top-[-50rem]"
          }`}
          onClick={() => setOpen(false)}
        >
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="#experience">
              <a className="md:px-6 lg:px-3 hover:text-secondary text-black duration-500 text-base lg:text-lg">
                Experience
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="#services">
              <a className="md:px-6 lg:px-3 hover:text-secondary text-black duration-500 text-base lg:text-lg">
                Services
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 mb-7 mt-0 font-semibold font-sans">
            <Link legacyBehavior href="#projects">
              <a className="md:px-6 lg:px-3 hover:text-secondary text-black duration-500 text-base lg:text-lg">
                Projects
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="#contact-us">
              <a className="md:px-6 lg:px-3 hover:text-secondary text-black duration-500 text-base lg:text-lg">
                Contact
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="" className="xl:mx-8 xl:ml-36">
              <a className="pointer md:ml-5 xl:ml-14 text-center text-white font-semibold rounded focus:outline-none bg-secondary border-2 border-primary-light py-2 px-10 shadow-lg hover:bg-secondary/80 hover:scale-110 transition delay-150 duration-300 ease-in-out hover:border-secondary/80 ">
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
