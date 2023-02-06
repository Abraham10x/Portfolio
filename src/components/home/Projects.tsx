/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import AllWorks from "../general/AllWorks";

const Projects: FC = () => {
  return (
    <div className="bg-white py-32">
      <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10">
        <h3 className="text-black capitalize font-bold text-2xl lg:3xl lg:text-5xl text-center">
          Let’s have a look at my <br />
          <span className="text-secondary font-sans capitalize font-medium">
            {" "}
            Services{" "}
          </span>
        </h3>
        <p className="text-black text-sm sm:text-xl lg:text-2xl my-3 text-center w-3/5 pt-4 mx-auto">
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a <span className="text-primary">start-up</span>,
          a huge corporation,
        </p>
        <nav
          className="flex space-x-5 justify-center mt-14"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-secondary dark:hover:text-gray-400 active"
            id="pills-with-brand-color-item-1"
            data-hs-tab="#pills-with-brand-color-1"
            aria-controls="pills-with-brand-color-1"
            role="tab"
          >
            All
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-secondary dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="pills-with-brand-color-item-2"
            data-hs-tab="#pills-with-brand-color-2"
            aria-controls="pills-with-brand-color-2"
            role="tab"
          >
            UI/UX Designs
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-secondary dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="pills-with-brand-color-item-3"
            data-hs-tab="#pills-with-brand-color-3"
            aria-controls="pills-with-brand-color-3"
            role="tab"
          >
            Web Dev
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-secondary border border-secondary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-secondary dark:hover:text-gray-400 dark:hover:text-gray-300"
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
            <p className="text-gray-500 dark:text-gray-400">
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
            <p className="text-gray-500 dark:text-gray-400">
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
            <p className="text-gray-500 dark:text-gray-400">
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
