import { getMiddleware } from "Middleware";
import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Channels = () => {
  const dispatch = useDispatch();

  const callback = (res) => {
    console.log(res);
    if (res.data.url !== undefined) {
      window.location.replace(res.data.url);
    }
  };

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
    <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
      <div className="flex flex-col items-end justify-between rounded-xl border-[1px] border-gray-400 bg-white p-4 dark:text-white">
        <div className="flex w-full justify-between p-2">
          <img
            className="h-10 w-10 rounded-full"
            src={
              "data:image/png;base64,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"
            }
            alt="Elon Musk"
          />

          <div className="flex w-full flex-col px-4 py-2  text-left">
            <h2 className=" flex items-center text-xl">
              Google{" "}
              <span className="ml-2 text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <span>
              <span className="text-gray-700">Status :</span>
              <span
                className={
                  statusVariable.google.connected
                    ? "text-green-500"
                    : "text-gray-700"
                }
              >
                {" "}
                {statusVariable.google.connected
                  ? "Connected"
                  : "Not Connected"}
              </span>
            </span>
            <p>Profile Id : NA</p>
          </div>
        </div>
        {!statusVariable.google.connected && (
          <button
            className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => getMiddleware("/link/google", callback, true)}
          >
            Connect
          </button>
        )}
      </div>

      <div className="flex flex-col items-end justify-between rounded-xl border-[1px] border-gray-400 bg-white p-4 dark:text-white">
        <div className="flex w-full justify-between p-2">
          <img
            className="h-10 w-10 rounded-full"
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
            }
            alt="Elon Musk"
          />

          <div className="flex w-full flex-col px-4 py-2  text-left">
            <h2 className=" flex items-center text-xl">
              Facebook{" "}
              <span className="ml-2 text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <span>
              <span className="text-gray-700">Status :</span>
              <span
                className={
                  statusVariable.facebook.connected
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {" "}
                {statusVariable.facebook.connected
                  ? "Connected"
                  : "Not Connected"}
              </span>
            </span>
            <p>Profile Id : NA</p>
          </div>
        </div>
        {!statusVariable.facebook.connected && (
          <button
            className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => getMiddleware("/link/google", callback, true)}
          >
            Connect
          </button>
        )}
      </div>

      <div className="dark:bg-inherit flex flex-col items-end justify-between rounded-xl border-[1px] border-gray-400 bg-white p-4 dark:text-white">
        <div className="flex w-full justify-between p-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg"
            alt="Elon Musk"
          />

          <div className="flex w-full flex-col px-4 py-2  text-left">
            <h2 className=" flex items-center text-xl">
              Amazon{" "}
              <span className="ml-2 text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <span>
              <span className="text-gray-700">Status :</span>
              <span
                className={
                  statusVariable.amazon.connected
                    ? "text-green-500"
                    : "text-gray-700"
                }
              >
                {" "}
                {statusVariable.amazon.connected
                  ? "Connected"
                  : "Not Connected"}
              </span>
            </span>
            <p>Profile Id : NA</p>
          </div>
        </div>
        {!statusVariable.amazon.connected && (
          <button
            className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => getMiddleware("/link/google", callback, true)}
          >
            Connect
          </button>
        )}
      </div>
      <div className="dark:bg-inherit flex flex-col items-end justify-between rounded-xl border-[1px] border-gray-400 bg-white p-4 dark:text-white">
        <div className="flex w-full justify-between p-2">
          <img
            className="h-10 w-10 rounded-full"
            src="data:image/jpeg;base64,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"
            alt="Elon Musk"
          />

          <div className="flex w-full flex-col px-4 py-2  text-left">
            <h2 className=" flex items-center text-xl">
              Lazada{" "}
              <span className="ml-2 text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <span>
              <span className="text-gray-700">Status :</span>
              <span className="text-green-600"> Connected</span>
            </span>
            <p>Profile Id : NA</p>
          </div>
        </div>

        <button
          className=" w-[130px] rounded-xl border-2 border-brand-500 px-5 py-3 text-base font-medium text-brand-500 transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 dark:border-brand-400 dark:bg-brand-400/10 dark:text-white dark:hover:bg-brand-300/10 dark:active:bg-brand-200/10"
          onClick={() => getMiddleware("/link/lazada", callback, true)}
        >
          Connect
        </button>
      </div>
      <div className="dark:bg-inherit flex flex-col items-end justify-between rounded-xl border-[1px] border-gray-400 bg-white p-4 dark:text-white">
        <div className="flex w-full justify-between p-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg"
            alt="Elon Musk"
          />

          <div className="flex w-full flex-col px-4 py-2  text-left">
            <h2 className=" flex items-center text-xl">
              Walmart{" "}
              <span className="ml-2 text-blue-500">
                <MdVerified />
              </span>
            </h2>
            <span>
              <span className="text-gray-700">Status :</span>
              <span className="text-green-600"> Connected</span>
            </span>
            <p>Profile Id : NA</p>
          </div>
        </div>

        <button
          disabled
          className="rounded-xl border-2 border-gray-300 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200/10 active:bg-gray-300/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
        >
          Connected
        </button>
      </div>
    </div>
  );
};

export default Channels;
