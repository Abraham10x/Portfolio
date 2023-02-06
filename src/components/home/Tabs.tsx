/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";

const Tabs: FC = () => {
  const roles = {
    google: [
      `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
      `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
      `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
    ],
  };
  return (
    <div className="flex basis-1/2">
      <div className="border-r border-gray-200 dark:border-gray-700">
        <nav
          className="flex flex-col space-y-2"
          aria-label="Tabs"
          role="tablist"
          data-hs-tabs-vertical="true"
        >
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary active"
            id="vertical-tab-with-border-item-1"
            data-hs-tab="#vertical-tab-with-border-1"
            aria-controls="vertical-tab-with-border-1"
            role="tab"
          >
            Google
          </button>
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary dark:hover:text-gray-300"
            id="vertical-tab-with-border-item-2"
            data-hs-tab="#vertical-tab-with-border-2"
            aria-controls="vertical-tab-with-border-2"
            role="tab"
          >
            Yahoo!
          </button>
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary dark:hover:text-gray-300"
            id="vertical-tab-with-border-item-3"
            data-hs-tab="#vertical-tab-with-border-3"
            aria-controls="vertical-tab-with-border-3"
            role="tab"
          >
            Microsoft
          </button>
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary dark:hover:text-gray-300"
            id="vertical-tab-with-border-item-4"
            data-hs-tab="#vertical-tab-with-border-4"
            aria-controls="vertical-tab-with-border-4"
            role="tab"
          >
            Tesla
          </button>
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary dark:hover:text-gray-300"
            id="vertical-tab-with-border-item-5"
            data-hs-tab="#vertical-tab-with-border-5"
            aria-controls="vertical-tab-with-border-5"
            role="tab"
          >
            Facebook
          </button>
          <button
            type="button"
            className="hs-tab-active:border-secondary hs-tab-active:text-secondary dark:hs-tab-active:text-secondary py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-secondary dark:hover:text-gray-300"
            id="vertical-tab-with-border-item-6"
            data-hs-tab="#vertical-tab-with-border-6"
            aria-controls="vertical-tab-with-border-6"
            role="tab"
          >
            Coinbase
          </button>
        </nav>
      </div>

      <div className="ml-8">
        <div
          id="vertical-tab-with-border-1"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-1"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Google</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="vertical-tab-with-border-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-2"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Yahoo!</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="vertical-tab-with-border-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-3"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Microsoft</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="vertical-tab-with-border-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-4"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Tesla</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="vertical-tab-with-border-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-5"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Facebook</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="vertical-tab-with-border-6"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-6"
        >
          <h5 className="font-serif text-2xl font-medium text-black capitalize">
            Engineer <span className="text-primary">@ Coinbase</span>
          </h5>
          <p className="text-black my-2 text-lg">May 2018 - Present</p>
          <ul className="space-y-3 text-base">
            {roles.google.map((data, index) => (
              <li key={index} className="flex space-x-3 w-[75%]">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-black">{data}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
