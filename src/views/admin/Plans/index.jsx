import PriceCard from "components/card/PriceCard";
import React from "react";

const Plans = () => {
  return (
    <div className="">
      <section className="mt-5 rounded-[20px]  bg-white  dark:bg-navy-700 ">
        <div className="mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5  font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Here at Acros we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          <div className="w-[100%] space-y-8  sm:gap-6 lg:grid lg:grid-cols-4 lg:space-y-0 xl:gap-5">
            {/* <!-- Pricing Card --> */}
            <PriceCard
              plan={"Basic"}
              isdiscount={true}
              description={
                "Best option for personal use & for your next project"
              }
              price={"99"}
              upgradedescription={"Upgrade for additional User/AdType/Account/Platform"}
              upgradeprice = {"20"}
              upgradediscount = {"15"}
              discountprice={"49"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
              ]}
              excludes={[
                "Exports Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
              ]}
            />
            <PriceCard
              isdiscount={true}
              plan={"Intermediate"}
              upgradedescription={"Upgrade for additional User/AdType/Account/Platform"}
              upgradeprice = {"40"}
              upgradediscount = {"25"}

              description={
                "Best option for personal use & for your next project"
              }
              price={"149"}
              discountprice={"74"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
                "Exports Reports",
                "Custom Reporting",

              ]}
              excludes={[
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
              ]}
            />
            <PriceCard
              isdiscount={true}
              upgradedescription={"Upgrade for additional User/AdType/Account/Platform"}
              upgradeprice = {"60"}
              upgradediscount = {"30"}
              plan={"Advance"}
              description={
                "Best option for personal use & for your next project"
              }
              price={"199"}
              discountprice={"99"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
                "Exports Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",

              ]}
              excludes={[
              ]}
            />
            <PriceCard
              isdiscount={false}
              plan={"Enterprise"}
              description={
                "Best option for personal use & for your next project"
              }
              upgradedescription={"Upgrade your plan for additional 5 User in Enterprise."}

              price={"999"}
              //   discountprice={"99"}
              upgradediscount={"299"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Unlimited accounts and platforms",
                "Ad Measurements",
                "Upto 10 users",
                "Ad Intelligence",
                "User Profile Management",
                "Export Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
                "Dedicated Tech Support"

              ]}
              excludes={[
              ]}
            />
            {/* <!-- Pricing Card --> */}

            {/* <!-- Pricing Card --> */}
          </div>


        </div>
      </section>
    </div>
  );
};

export default Plans;
