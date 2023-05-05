import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";

const ProfileOverview = () => {

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful  mt-3 flex grid h-fit grid-cols-1 grid-cols-2 flex-col gap-5 lg:grid-cols-2">
        <div className=" lg:!mb-0">
          <Banner  />
        </div>

        

        <div className=" lg:col-span-1 lg:mb-0 3xl:col-span-1">
          <General  />
        </div>
      </div>

     
    </div>
  );
};

export default ProfileOverview;
