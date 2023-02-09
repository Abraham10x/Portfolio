/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import AllWorks from "../general/AllWorks";

const Projects: FC = () => {
  return (
    <div className="bg-white py-32" id="projects">
      <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <h3 className="text-black capitalize font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          Let’s have a look at my <br className="hidden sm:inline-block" />
          <span className="text-secondary font-sans capitalize font-medium">
            {" "}
            Projects{" "}
          </span>
        </h3>
        <p className="text-black text-base sm:text-xl lg:text-2xl my-3 text-center w-full sm:w-[65%] lg:w-3/5 pt-4 mx-auto">
          I have extensive experience in delivering high-quality software
          solutions for a variety of industries, I pride myself on my ability to
          understand project requirements, analyze and design effective
          solutions, and execute projects with{" "}
          <span className="text-primary">
            efficiency and attention to detail.
          </span>
        </p>
        <nav
          className="flex space-x-5 w-full justify-center mt-14 overflow-x-auto"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm sm:text-base font-medium text-center text-black rounded-lg  active"
            id="pills-with-brand-color-item-1"
            data-hs-tab="#pills-with-brand-color-1"
            aria-controls="pills-with-brand-color-1"
            role="tab"
          >
            All
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm sm:text-base font-medium text-center text-black rounded-lg  hover:text-secondary"
            id="pills-with-brand-color-item-2"
            data-hs-tab="#pills-with-brand-color-2"
            aria-controls="pills-with-brand-color-2"
            role="tab"
          >
            UI/UX Designs
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm sm:text-base font-medium text-center text-black rounded-lg  hover:text-secondary"
            id="pills-with-brand-color-item-3"
            data-hs-tab="#pills-with-brand-color-3"
            aria-controls="pills-with-brand-color-3"
            role="tab"
          >
            Web Dev
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm sm:text-base font-medium text-center text-black rounded-lg  hover:text-secondary"
            id="pills-with-brand-color-item-4"
            data-hs-tab="#pills-with-brand-color-4"
            aria-controls="pills-with-brand-color-4"
            role="tab"
          >
            Mobile App Dev
          </button>
        </nav>

        <div className="mt-3 mx-auto">
          <div
            id="pills-with-brand-color-1"
            role="tabpanel"
            aria-labelledby="pills-with-brand-color-item-1"
          >
            <AllWorks />
          </div>
          <div
            id="pills-with-brand-color-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="pills-with-brand-color-item-2"
          >
            <p className="text-black dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                second
              </em>{" "}
              item's tab body.
            </p>
          </div>
          <div
            id="pills-with-brand-color-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="pills-with-brand-color-item-3"
          >
            <p className="text-black dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                third
              </em>{" "}
              item's tab body.
            </p>
          </div>
          <div
            id="pills-with-brand-color-4"
            className="hidden"
            role="tabpanel"
            aria-labelledby="pills-with-brand-color-item-4"
          >
            <p className="text-black dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                fourth
              </em>{" "}
              item's tab body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
