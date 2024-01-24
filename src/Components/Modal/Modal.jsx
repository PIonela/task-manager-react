import { useState, useEffect } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="modal-content">
        <div className="card">
          <div className="close-button" onClick={closeModal}>
            x
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
