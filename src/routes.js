import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";


// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdSocialDistance,
  MdLock,
  MdLockOpen,
  MdSettings,
  MdAdsClick,
  MdPaid
} from "react-icons/md";

// components imports
import Channels from "views/admin/channels";
import PPCDashboard from "views/admin/ppc/PPCDashboard";
import SocialDashboard from "views/admin/social/SocialDashboard"
import DSPDashboard from "views/admin/dspDashboard/DSPDashboard";
import NativeDashboard from "views/admin/native/NativeDashboard";
import { IoIosAnalytics } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import Plans from "views/admin/Plans";



const routes = [
  {
    name: "Acros Ads",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Acros PPC",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "PPC-dashboard",
    component: <PPCDashboard />,
    subRoutes:[
      {
      name:"Overview",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"overview-ppc",
    },
      {
      name:"Insights",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"insights-ppc"
    },
      {
      name:"Compare ",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"compare-ppc"
    },
      
  ]
  },
  {
    name: "Acros Social",
    layout: "/admin",
    icon: <MdSocialDistance className="h-6 w-6" />,
    path: "social-dashboard",
    component: <SocialDashboard />,
    subRoutes:[
      {
      name:"Overview",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"overview-social",
    },
      {
      name:"Insights",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"insights-social"
    },
      {
      name:"Compare ",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"compare-social"
    },
      
  ]
  },
  {
    name: "Acros DSP",
    layout: "/admin",
    icon: <SiGoogleanalytics className="h-6 w-6" />,
    path: "dsp-dashboard",
    component: <DSPDashboard />,
    subRoutes:[
      {
      name:"Overview",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"overview-dsp",
    },
      {
      name:"Insights",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"insights-dsp"
    },
      {
      name:"Compare ",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"compare-dsp"
    },
      
  ]
  },
  {
    name: "Acros Native",
    layout: "/admin",
    icon: <IoIosAnalytics className="h-6 w-6" />,
    path: "native-dashboard",
    component: <NativeDashboard />,
    subRoutes:[
      {
      name:"Overview",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"overview-native",
    },
      {
      name:"Insights",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"insights-native"
    },
      {
      name:"Compare ",
      layout:"/admin",
      icon: <MdPaid className="h-6 w-6" />,
      path:"compare-native"
    },
      
  ]
  },
  {
    name: "Plans",
    layout: "/admin",
    icon: <MdPaid className="h-6 w-6" />,
    path: "plans",
    component: <Plans/>,

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
