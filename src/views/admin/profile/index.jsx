import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProfileOverview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = useSelector((state) => state.accountData.userInfo);
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (userInfo.subscription) {
    } else {
      onOpen();
    }
  }, []);

  const handleClose = () => {
    onClose();
    console.log(loc);
    navigate("/admin/plans");
  };

  return (
    <>
      <div className="flex w-full flex-col gap-5 h-screen">
        <div className="w-ful  mt-3  grid h-fit  grid-cols-2 flex-col gap-5 lg:grid-cols-2">
          <div className=" lg:!mb-0 h-fit">
            <Banner />
          </div>

          <div className=" lg:col-span-1 lg:mb-0 3xl:col-span-1">
            <General />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
