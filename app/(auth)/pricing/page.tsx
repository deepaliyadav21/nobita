import React from "react";

const page = () => {
  return (
    <section className="flex items-center justify-center pb-10 bg-white">
      <div
        className="p-4 sm:px-10  flex flex-col justify-center items-center text-base h-screen mx-auto"
        id="pricing"
      >
        <h3 className="text-4xl font-semibold text-center text-black font-poppins flex gap-2 justify-center mb-4 mt-7">
          Grab your limited period offer!
        </h3>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-standard"
                className="text-gray-900 text-2xl font-semibold leading-8"
              >
                Monthly
              </h3>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              Greate for starter or occasional prospecting
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
                ₹149
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                ₹99
              </span>
            </p>
            <a
              href=""
              aria-describedby="tier-standard"
              className="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              Buy now
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                1 Month Plan
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                All features
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Premium Referals activated for limited period
              </li>
            </ul>
          </div>
          <div className="ring-2 ring-blue-600 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-extended"
                className="text-blue-600 text-2xl font-semibold leading-8"
              >
                Extended
              </h3>
              <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              Great for Serious hunters
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
                ₹449
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                ₹249
              </span>
            </p>
            <a
              href=""
              aria-describedby="tier-extended"
              className="bg-blue-600 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              Buy now
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                3 Months Plan
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                All features
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Premium Referals Unlocked
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
