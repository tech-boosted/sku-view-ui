import Card from "components/card";
import React from "react";
import { useSelector } from "react-redux";

const General = () => {
  const userInfo = useSelector((state) => state.accountData.userInfo);
  let channels = Object.keys(userInfo.credentials);

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
          <p className="text-base font-medium text-navy-700 dark:text-white break-normal">
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
               {channels.map((item,index)=>(
                <li className="" key={index}>{item}</li>
               ))}
            </ul>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
