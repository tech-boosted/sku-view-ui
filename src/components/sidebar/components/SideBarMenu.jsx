import DashIcon from "components/icons/DashIcon";
import React, { useState } from "react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SideBarMenu = ({ route, index, activeRoute }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen((prev) => !prev);
    // navigate("/admin/PPC-dashboard/overview");
  };
  const renderSubRoutes = () => {
    var result = [];
    route.subRoutes.map((subRoute, i) => {
      result.push(
        <Link
          key={index}
          to={{
            pathname: route.layout + "/" + route.path + "/" + subRoute.path,
          }}
          params={{ testvalue: "hello" }}
        >
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li
              className="my-[3px] ml-10 flex cursor-pointer items-center px-8"
              key={index}
            >
              {/* <span
                className={`${
                  activeRoute(subRoute.path) === true
                    ? "font-bold text-brand-500 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {subRoute.icon ? subRoute.icon : <DashIcon />}{" "}
              </span> */}
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(subRoute.path) === true
                    ? "font-bold text-navy-700 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {subRoute.name}
              </p>
            </li>
            {activeRoute(subRoute.path) ? (
              <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
            ) : null}
          </div>
        </Link>
      );
    });
    return result;
  };

  return (
    <>
      <div className="relative mb-3 flex justify-between hover:cursor-pointer "
          onClick={() => handleClick()}
          >
        <li
          className="my-[3px] flex w-full cursor-pointer items-center px-8 "
          key={index}
        >
          <span
            className={`${
              activeRoute(route.path) === true
                ? "font-bold text-brand-500 dark:text-white"
                : "font-medium text-gray-600"
            }`}
          >
            {route.icon ? route.icon : <DashIcon />}{" "}
          </span>
          <p
            className={`leading-1 ml-4 flex ${
              activeRoute(route.path) === true
                ? "font-bold text-navy-700 dark:text-white"
                : "font-medium text-gray-600"
            }`}
          >
            {route.name}
          </p>
        </li>
        {activeRoute(route.path) ? (
          <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
        ) : null}

        {open ? (
          <span
            className={`${
              activeRoute(route.path) === true
                ? "mr-4 text-xl font-bold text-brand-500 dark:text-white"
                : "mr-4 text-xl font-medium text-gray-600"
            }`}
          >
            <FiChevronUp />
          </span>
        ) : (
          <span
            className={`${
              activeRoute(route.path) === true
                ? "mr-4 text-xl font-bold text-brand-500 dark:text-white"
                : "mr-4 text-xl font-medium text-gray-600"
            }`}
          >
            <FiChevronDown />
          </span>
        )}
      </div>
      {open && <div>{renderSubRoutes()}</div>}
    </>
  );
};

export default SideBarMenu;
