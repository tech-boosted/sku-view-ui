import React from "react";
import { useToast } from "@chakra-ui/react";

function useOutsideAlerter(ref, setX) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

export interface DropdownProps {
  button: JSX.Element;
  children: JSX.Element[] | JSX.Element;
  classNames?: string;
  animation?: string;
  disabled?: boolean;
  toastHeading?: string;
}

const Dropdown = ({
  button,
  children,
  classNames,
  animation,
  disabled,
  toastHeading,
}: DropdownProps) => {
  const toast = useToast();

  const wrapperRef = React.useRef(null);
  const [openWrapper, setOpenWrapper] = React.useState(false);
  useOutsideAlerter(wrapperRef, setOpenWrapper);

  const handleDisability = () => {
    if (!disabled) {
      setOpenWrapper(!openWrapper);
    } else {
      toast({
        title: `${toastHeading}`,
        status: "warning",
        duration: 5000,
        position: "top-right",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => handleDisability()}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
