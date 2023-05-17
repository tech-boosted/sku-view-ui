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
import { Link, useNavigate } from "react-router-dom";

const ProfileOverview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = useSelector((state) => state.accountData.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.subscription) {
    } else {
      onOpen();
    }
  }, []);
  
  const handleClose = () => {
    onClose();
    navigate("/admin/plans");
  };

  return (
    <>
      {userInfo.subscription && (
        <div className="flex w-full flex-col gap-5">
          <div className="w-ful  mt-3 flex grid h-fit grid-cols-1 grid-cols-2 flex-col gap-5 lg:grid-cols-2">
            <div className=" lg:!mb-0">
              <Banner />
            </div>

            <div className=" lg:col-span-1 lg:mb-0 3xl:col-span-1">
              <General />
            </div>
          </div>
        </div>
      ) }

      <Modal isOpen={isOpen} onClose={handleClose} >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Buy Subscription</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              You cannot access this feature with your current subscription
              plan. Inorder to access please upgrade your plan
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple">
              <Link to={"/admin/plans"}>Upgrade Plan</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileOverview;
