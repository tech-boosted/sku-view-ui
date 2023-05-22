import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Compare from "../components/Compare";

const PPCDashboard = () => {
  let Platforms = ["Amazon", "Google", "Ebay", "Walmart"];
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mt-5 flex w-full flex-col ">
      <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
        <Link
          to={"/admin/PPC-dashboard/overview-ppc"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          Overview
        </Link>
        <button
          // to={"/admin/PPC-dashboard/insights"}
          onClick={() =>
            navigate("/admin/channels", {
              state: { prevPath: location.pathname },
            })
          }
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Insights
        </button>
        <Link
          to={"/admin/PPC-dashboard/compare-ppc"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Compare
        </Link>
      </div>
      <Routes>
        <Route
          path="/overview-ppc"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        />
        <Route
          path="/insights-ppc"
          element={<InsightsTable platforms={[...Platforms]} />}
        />
        <Route
          path="/compare-ppc"
          element={<Compare platforms={[...Platforms]} />}
        />
      </Routes>
    </div>
  );
};

export default PPCDashboard;
