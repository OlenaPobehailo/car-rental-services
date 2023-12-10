import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";
import { CrossIcon } from "assets/images";

const rootModal = document.querySelector("#modal");

const Modal = ({ children, close }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [close, handleKeyDown]);

  const handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleClickOutside}>
      <ModalContent>
        <CloseButton onClick={close}>
          <CrossIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    rootModal
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
