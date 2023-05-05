import Card from "components/card";
import React from "react";
import { useSelector } from "react-redux";

const General = () => {
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

  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          User Information
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">FirstName</p>
          <p className="break-normal text-base font-medium text-navy-700 dark:text-white">
            {userInfo.firstname}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">LastName</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.lastname}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Email</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.email}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Company Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.company}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Phone Number</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.phone_number}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Channels</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            <ul className="flex list-decimal gap-6 px-2">
             <li>Google</li>
             <li>Amazon</li>
             <li>Facebook</li>
            </ul>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
