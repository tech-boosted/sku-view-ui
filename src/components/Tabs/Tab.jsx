import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ route }) => {
  return (
    <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
      {route[0].subRoutes.map((item, index) => (
        <Link
          key={index}
          to={`/admin/${route[0].path}/${item.path}`}
          state={{ from: "/admin/native-dashboard/overview" }}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Tab;
