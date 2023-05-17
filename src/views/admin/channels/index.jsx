import { postMiddleware } from "Middleware";
import { getMiddleware } from "Middleware";
import Dropdown from "components/dropdown";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import InputField from "components/fields/InputField";

const Channels = () => {
  const [amazonProfiles, setAmazonProfiles] = useState([]);
  const [amazonProfileId, setAmazonProfileId] = useState("NA");
  const [disableAmazonDropdown, setDisableAmazonDropdown] = useState(false);

  const [showGoogleID, setShowGoogleID] = useState(false);
  const [googleCustomerId, setGoogleCustomerId] = useState("NA");
  const [displayFormError, setDisplayFormError] = useState(false);
  const toast = useToast();

  const amazonCredentialsFromStore = useSelector(
    (state) => state.accountData.userInfo.credentials
  );

  useEffect(() => {
    const callback = (res) => {
      if (res == undefined) {
        setAmazonProfiles([
          {
            accountInfo: {
              marketplaceStringId: "A2Q3Y263D00KWC",
              id: "AZS2MGJJ0FCTD",
              type: "seller",
              name: "FIVE Stars",
              validPaymentMethod: false,
            },
            countryCode: "BR",
            currencyCode: "BRL",
            dailyBudget: 999999999,
            profileId: 3999774442873617,
            timezone: "America/Sao_Paulo",
          },
        ]);

        toast({
          title: "Internal Server Error",
          description: `Please try after sometime.`,
          status: "error",
          duration: 5000,
          position: "top-right",
          variant: "subtle",
          isClosable: true,
        });
      } else {
        setAmazonProfiles(res.data.data);
      }
    };

    if (amazonCredentialsFromStore) {
      let amazonProfileIdFromStore =
        amazonCredentialsFromStore.amazon.profile_id;

      if (amazonProfileIdFromStore) {
        setAmazonProfileId(amazonProfileIdFromStore);
        setDisableAmazonDropdown(true);
      }
    }

    getMiddleware("/link/amazon/listProfiles", callback, true);
  }, []);

  const profiles = [
    { id: "Profile Id 1" },
    { id: "Profile Id 2" },
    { id: "Profile Id 3" },
  ];

  const callback = (res) => {
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

  const handleClick = (item) => {
    let id = item.profileId;
    let name = item.accountInfo.name;

    const callbackForSettingId = (res) => {
      if (res.status === 200) {
        setAmazonProfileId(id);
        setDisableAmazonDropdown(true);
      }
    };

    if (
      window.confirm(
        "By clicking Ok you will set this profile Id as your main profile Id and this step is Irreversible Your Profile ID is : " +
          id +
          " and the name is " +
          name
      )
    ) {
      postMiddleware(
        "/link/amazon/setProfile",
        { profile_id: id },
        callbackForSettingId,
        true
      );
    }
  };

  const handleGoggleCustomerIdChange = (e) => {
    setGoogleCustomerId(e.target.value);
  };
  const handleGoogleCustomerId = (id) => {
    if (id.length == 12) {
      setDisplayFormError(false);
      setShowGoogleID(true);
      alert("Ok successtruye");
    } else {
      setDisplayFormError(true);
    }
  };

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {/* Google */}
        <div className="flex flex-col items-end justify-between rounded-[20px]  bg-white p-4 dark:bg-navy-700 dark:text-white">
          <div className="flex w-full justify-between gap-2 p-2">
            <img
              className="h-10 w-10 rounded-full"
              src={
                "data:image/png;base64,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"
              }
              alt="Elon Musk"
            />

            <div className="flex w-full flex-col px-4 text-left">
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
                      : "text-red-500"
                  }
                >
                  {" "}
                  {statusVariable.google.connected
                    ? "Connected"
                    : "Not Connected"}
                </span>
              </span>
              {showGoogleID ? (
                <p>Profile Id : {googleCustomerId} </p>
              ) : (
                <p>Profile Id : NA</p>
              )}
            </div>

            {!showGoogleID && (
              <Dropdown
                disabled={false}
                button={
                  <button className="flex h-[52px] min-w-[150px] items-center justify-between rounded-xl bg-gray-200 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                    Profile Id
                    <FiChevronDown className="ml-2 text-xl" />
                  </button>
                }
                children={
                  <div className="flex h-fit w-fit items-center justify-start gap-4 rounded-xl bg-white bg-cover bg-no-repeat px-5 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                    <div>
                      <InputField
                        variant="auth"
                        extra="flex items-center mb-2"
                        placeholder="Enter the customer Id"
                        id="password"
                        type="number"
                        value={googleCustomerId}
                        handleChange={handleGoggleCustomerIdChange}
                      />
                      {displayFormError && (
                        <p className="ml-3 mb-2 text-sm font-medium text-red-300 dark:text-red-600">
                          *Please Enter Valid Customer ID
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleGoogleCustomerId(googleCustomerId)}
                      className="h-[46px] rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    >
                      Done
                    </button>
                  </div>
                }
                classNames={"py-2 top-12 left-2  w-max"}
                animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
              />
            )}
          </div>
          {!statusVariable.google.connected ? (
            <button
              className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={() => getMiddleware("/link/google", callback, true)}
            >
              Connect
            </button>
          ) : (
            <button
              disabled
              className="rounded-xl border-2 border-gray-300 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200/10 active:bg-gray-300/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              Connected
            </button>
          )}
        </div>
        {/* Facebook */}
        <div className="flex flex-col items-end justify-between rounded-[20px]  bg-white p-4 dark:bg-navy-700 dark:text-white">
          <div className="flex w-full justify-between gap-2 p-2">
            <img
              className="h-10 w-10 rounded-full"
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
              }
              alt="Elon Musk"
            />

            <div className="flex w-full flex-col px-4 text-left">
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
          {!statusVariable.facebook.connected ? (
            <button
              className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={() => getMiddleware("/link/facebook", callback, true)}
            >
              Connect
            </button>
          ) : (
            <button
              disabled
              className="rounded-xl border-2 border-gray-300 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200/10 active:bg-gray-300/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              Connected
            </button>
          )}
        </div>
        {/* Amazon */}
        <div className="dark:bg-inherit flex flex-col items-end justify-between rounded-[20px]  bg-white p-4 dark:bg-navy-700 dark:text-white">
          <div className="flex w-full justify-between gap-2 p-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg"
              alt="Elon Musk"
            />

            <div className="flex w-full flex-col px-4 text-left">
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
                      : "text-red-500"
                  }
                >
                  {" "}
                  {statusVariable.amazon.connected
                    ? "Connected"
                    : "Not Connected"}
                </span>
              </span>
              <p>Profile Id : {amazonProfileId}</p>
            </div>

            {!disableAmazonDropdown && (
              <Dropdown
                disabled={disableAmazonDropdown}
                toastHeading={"Profile Id is already selected."}
                button={
                  <button className="flex h-[52px] min-w-[150px] items-center justify-between rounded-xl bg-gray-200 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                    Profile Id
                    <FiChevronDown className="ml-2 text-xl" />
                  </button>
                }
                children={
                  <div className="flex h-[200px] w-44 flex-col justify-start overflow-scroll rounded-[20px] bg-white bg-cover bg-no-repeat px-5 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                    {amazonProfiles.map((item, index) => (
                      <button
                        className=" text-black hover:text-black py-2 text-left  text-base font-medium  hover:font-bold "
                        value={"amazon"}
                        onClick={() => handleClick(item)}
                        key={index}
                      >
                        {item.accountInfo.name}
                      </button>
                    ))}
                  </div>
                }
                classNames={"py-2 top-12 left-2  w-max"}
                animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
              />
            )}
          </div>
          {!statusVariable.amazon.connected ? (
            <button
              className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={() => getMiddleware("/link/amazon", callback, true)}
            >
              Connect
            </button>
          ) : (
            <button
              disabled
              className="rounded-xl border-2 border-gray-300 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200/10 active:bg-gray-300/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              Connected
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Channels;
