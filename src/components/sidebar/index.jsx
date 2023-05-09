/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import sidebarLogo from "../../assets/svg/sidebar/LOGO_ACROS.svg"

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {

  let routesForSidebar = routes.filter((item,index)=>{
    return (item.name !== "Sign Up" && item.name !== "Sign In");
  })
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[10px] mt-[5px] flex items-center`}>
          <img src={sidebarLogo} alt="Sidebar Across logo" className="w-[250px] object-contain"/>
        {/* <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <span className="font-medium"></span>
        </div> */}
      </div>
      <div className="mt-[5px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routesForSidebar} />
      </ul>

     
      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
