import React, { useEffect } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const SubscriptionModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const handleClose = () => {
    onClose();
    navigate(location?.state?.prevPath ? location.state.prevPath : "/admin/default");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Buy Subscription</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            You cannot access this feature with your current subscription plan.
            Inorder to access please upgrade your plan
          </p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple">
            <Link to={"/admin/plans"}>Upgrade Plan</Link>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SubscriptionModal;
