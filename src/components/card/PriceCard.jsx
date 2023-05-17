import React from "react";
import { Link } from "react-router-dom";

const PriceCard = (props) => {
  const {
    plan,
    description,
    price,
    discountprice,
    duration,
    includes,
    excludes,
    isdiscount,
    upgradedescription,
    upgradeprice,
    upgradediscount,
  } = props;

  let includesArr = [];
  let excludesArr = [];
  const renderIncludes = () => {
    includes.map((item, index) => {
      includesArr.push(
        <li key={index} className="flex items-center space-x-3">
          {/* <!-- Icon --> */}
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{item}</span>
        </li>
      );
    });

    return includesArr;
  };
  const renderExcludes = () => {
    excludes.map((item, index) => {
      excludesArr.push(
        <li key={index} className="flex items-center space-x-3">
          {/* <!-- Icon --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0 text-red-500 dark:text-red-400"
            fill="currentColor"
            viewBox="0 0 101 101"
            id="cross"
          >
            <switch>
              <g>
                <path d="m53.657 48 25.171-25.172a4 4 0 1 0-5.656-5.656L48 42.343 22.829 17.172a4 4 0 0 0-5.657 5.656L42.344 48 17.172 73.172a4 4 0 1 0 5.657 5.656L48 53.657l25.172 25.171C73.953 79.609 74.977 80 76 80s2.048-.391 2.828-1.172a4 4 0 0 0 0-5.656L53.657 48z"></path>
              </g>
            </switch>
          </svg>{" "}
          <span>{item}</span>
        </li>
      );
    });

    return excludesArr;
  };

  return (
    <div className="relative mx-auto flex max-w-lg flex-col rounded-[20px] rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow-lg shadow dark:border-gray-600 dark:bg-white/10 dark:border-none dark:text-white xl:p-8">
      {isdiscount && (
        <span className="absolute right-4 top-4 text-lg font-bold text-brand-500 ">
          -50% off
        </span>
      )}
      <h3 className="mb-4 text-2xl font-semibold">{plan}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        {description}
      </p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-4xl font-extrabold">
          {isdiscount ? (
            <span>
              <span className="decoration-red-7	00    line-through">
                {" "}
                {"$"}
                {price}
              </span>
              <span>
                {" $"}
                {discountprice}
              </span>
            </span>
          ) : (
            <span>
              {" "}
              {"$"}
              {price}
            </span>
          )}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {"/"}
          {duration}
        </span>
      </div>
      {/* <!-- List --> */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {renderIncludes()}
        {renderExcludes()}
      </ul>
      <Link>
        <p className="mt-5 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          {upgradedescription}
          {" at"}
        </p>
        <div className="text-black mb-5 text-2xl font-extrabold">
          {upgradeprice && (
            <span className="decoration-red-7 00    line-through">
              {" "}
              {"$"}
              {upgradeprice}
            </span>
          )}
          {upgradediscount && (
            <span>
              {" $"}
              {upgradediscount}
            </span>
          )}
        </div>

        <button className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default PriceCard;
