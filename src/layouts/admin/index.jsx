import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import { getMiddleware } from "Middleware";
import { useDispatch } from "react-redux";
import Protected from "components/routing/Protected";
import SusbcribedRoute from "components/routing/SusbcribedRoute";
import SubscriptionModal from "components/subscription/SubscriptionModal";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
    const callbackForUserData = (res) => {
      if (res) {
        // if (res.data) {
        //   dispatch({
        //     type: "loadUser",
        //     payload: {
        //       userData: res.data,
        //     },
        //   });
        // }
      }
    };

    const callbackForChartData = (res) => {
      let sumArray = (arr) => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }

        return sum;
      };

      let performersData = [];
      let data = res.data.data.dummyChartData;
      data.map((item) => {
        let mainObj = { name: item.skuName, platform: [] };
        item.platform.map((platform) => {
          let innerObj = { name: platform.name, data: [] };
          platform.data.map((property) => {
            let sum = sumArray(property.data);
            innerObj.data.push(sum);
          });
          mainObj.platform.push(innerObj);
        });

        performersData.push(mainObj);
      });

      // for insights table

      let ArrSum = (arr) => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      };

      let dataForInsights = [];
      if (res.data.data.dummyChartData !== undefined) {
        let obj;
        res.data.data.dummyChartData.map((item) => {
          obj = {};
          obj.platform = [];
          obj.impressions = [];
          obj.clicks = [];
          obj.orders = [];
          obj.sales = [];
          obj.spend = [];

          item.platform.map((platform) => {
            obj.platform.push(platform.name);
            platform.data.map((properties, i) => {
              obj.sku = item.skuName;
              if (i === 0) {
                let summedVal = ArrSum(properties.data);
                obj.impressions.push(summedVal);
              }
              if (i === 1) {
                let summedVal = ArrSum(properties.data);
                obj.spend.push(summedVal);
              }
              if (i === 2) {
                let summedVal = ArrSum(properties.data);
                obj.clicks.push(summedVal);
              }
              if (i === 3) {
                let summedVal = ArrSum(properties.data);
                obj.orders.push(summedVal);
              }
              if (i === 4) {
                let summedVal = ArrSum(properties.data);
                obj.sales.push(summedVal);
              }
            });
          });
          dataForInsights.push(obj);
        });
      }

      dispatch({ type: "loadInsightsData", payload: dataForInsights });
      dispatch({ type: "loadPerformersData", payload: performersData });
      dispatch({
        type: "loadChartData",
        payload: res.data.data.dummyChartData,
      });
      dispatch({
        type: "loadDateData",
        payload: res.data.data.dummyDateData,
      });
    };

    getMiddleware("/user/userInfo", callbackForUserData, true);
    getMiddleware("/data", callbackForChartData, true);
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        if (true) {
          return (
            <Route
              path={`/${prop.path}/*`}
              element={prop.component}
              key={key}
            />
          );
        } else {
          return (
            <Route element={<SusbcribedRoute path={prop.path} />}>
              <Route
                path={`/${prop.path}/*`}
                element={<SubscriptionModal />}
                key={904}
              />
            </Route>
          );
        }
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[287px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s  mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                <Route element={<Protected />}>
                  {getRoutes(routes)}

                  <Route
                    path="/"
                    element={<Navigate to="/admin/default" replace />}
                  />
                </Route>
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
