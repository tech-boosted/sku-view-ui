import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import { Link, Route, Routes } from "react-router-dom";
import Compare from "../components/Compare";

const SocialDashboard = () => {
  var Platforms = ["Facebook", "Instagram", "Tiktok"];
  return (
    <div className="mt-5 flex w-full flex-col gap-5">
    <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
     <Link
       to="/admin/dsp-dashboard/overview-social"
       state={{ from: "/admin/dsp-dashboard/overview" }}
       className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
     >
       Overview
     </Link>
     <Link
       to={"/admin/dsp-dashboard/insights-social"}
       className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
     >
       Insights
     </Link>
     <Link
       to={"/admin/dsp-dashboard/compare-social"}
       className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
     >
       Compare
     </Link>
   </div>
   <Routes>
     <Route
       path="/overview-social"
       element={<ChartsAndTable platfroms={[...Platforms]} />}
     />
     <Route
       path="/insights-social"
       element={<InsightsTable platforms={[...Platforms]} />}
     />
     <Route
       path="/compare-social"
       element={<Compare platforms={[...Platforms]} />}
     />
   </Routes>
 </div>
  );
};

export default SocialDashboard;
