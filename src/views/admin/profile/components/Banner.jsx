import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { useSelector } from "react-redux";
import { BsPerson } from "react-icons/bs";

const Banner = () => {
  
  let statusVariable = useSelector(
    (state) => state.accountData.userInfo.credentials
  );

  if (statusVariable === undefined) {
    statusVariable = {
      amazon: { connected: true },
      google: { connected: true },
      facebook: { connected: true },
    };
  }

  let userInfo = useSelector((state) => state.accountData.userInfo);
  if (userInfo === undefined) {
    userInfo = {
      firstname: "never",
      lastname: "mind",
      company: "pureNext",
      phone_number: 123,
      email: "gus@gmail.com",
     
    };
  }

  return (
    <Card extra={"items-center w-full min-h-[370px] h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center bg-gray-100 rounded-full border-[4px] border-white  dark:bg-navy-800 dark:!border-navy-700 ">
          <BsPerson className="h-[50px] w-[50px] text-brand-500"/>
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {userInfo.firstname} {userInfo.lastname}
        </h4>
        <p className="text-base font-normal text-gray-600">
          {userInfo.company}
        </p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Google
          </p>
          <p
            className={
              statusVariable.google.connected
                ? "text-xs font-normal text-green-500 "
                : "text-xs font-normal text-red-500 "
            }
          >
            {statusVariable.google.connected
              ? "Connected"
              : "Not Connected"}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Amazon
          </p>
          <p
            className={
              statusVariable.amazon.connected
             ? "text-xs font-normal text-green-500 "
              : "text-xs font-normal text-red-500 "
            }
          >
            {statusVariable.amazon.connected ? "Connected" : "Not Connected"}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Facebook
          </p>
          <p
            className={
              statusVariable.facebook.connected
              ? "text-xs font-normal text-green-500 "
              : "text-xs font-normal text-red-500 "
            }
          >
            {statusVariable.facebook.connected ? "Connected" : "Not Connected"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
