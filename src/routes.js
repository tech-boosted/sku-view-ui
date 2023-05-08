import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import Comparison1 from "views/admin/comparison1";
import Comparison2 from "views/admin/comparison2";

// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdLockOpen,
  MdSettings,
  MdAnalytics,
  MdAdsClick
} from "react-icons/md";
import Channels from "views/admin/channels";
import PPCDashboard from "views/admin/ppcDashboard/PPCDashboard";
import SocialDashboard from "views/admin/socialDashboard/SocialDashboard";
import DSPDashboard from "views/admin/dspDashboard/DSPDashboard";
import NativeDashboard from "views/admin/nativeDashboard/NativeDashboard";



const routes = [
  {
    name: "Collective Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Across PPC",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "PPC-dashboard",
    component: <PPCDashboard />,
  },
  {
    name: "Across Social",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "social-dashboard",
    component: <SocialDashboard />,
  },
  {
    name: "Across DSP",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "dsp-dashboard",
    component: <DSPDashboard />,
  },
  {
    name: "Across Native",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "native-dashboard",
    component: <NativeDashboard />,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Platform - Multi SKU",
  //   layout: "/admin",
  //   icon: <MdAnalytics className="h-6 w-6" />,
  //   path: "comparison1",
  //   component: <Comparison1 />,
  // },
  // {
  //   name: "SKU - Multi Platform",
  //   layout: "/admin",
  //   icon: <MdAnalytics className="h-6 w-6" />,
  //   path: "comparison2",
  //   component: <Comparison2/>,
  // },
  {
    name: "Channels",
    layout: "/admin",
    icon: <MdAdsClick className="h-6 w-6" />,
    path: "channels",
    component: <Channels/>,
  },

 
  
  {
    name: "Settings",
    layout: "/admin",
    path: "profile",
    icon: <MdSettings className="h-6 w-6" />,
    component: <Profile />,
  },

  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLockOpen className="h-6 w-6" />,
    component: <SignUp />,
  },


  
 
];
export default routes;
