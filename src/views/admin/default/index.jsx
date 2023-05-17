import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import { AiFillGift, AiTwotoneThunderbolt } from "react-icons/ai";
import { HiTrendingUp } from "react-icons/hi";
import { TbClick } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import TopPerformer from "./components/TopPerformer";
import BottomPerformer from "./components/BottomPerformer";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<RiExchangeDollarFill className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<BiDollarCircle className="h-6 w-6" />}
          title={"Spend"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<AiFillGift className="h-7 w-7" />}
          title={"Orders"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<HiTrendingUp className="h-6 w-6" />}
          title={"ROI"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"CVR"}
          subtitle={"145"}
        />
        <Widget
          icon={<TbClick className="h-6 w-6" />}
          title={"CPC"}
          subtitle={"$2433"}
        />
        <Widget
          icon={<FaFileInvoiceDollar className="h-6 w-6" />}
          title={"Profitability"}
          subtitle={"$2433"}
        />
        <Widget
          icon={<AiTwotoneThunderbolt className="h-6 w-6" />}
          title={"Threshold"}
          subtitle={"$2433"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TopPerformer />
        <BottomPerformer />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <WeeklyRevenue />
        </div>

        {/* Complex Table , Task & Calendar */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
