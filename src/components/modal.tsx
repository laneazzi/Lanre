import { ReactNode } from "react";
import ReactDOM from "react-dom";

import closeIcon from "../assets/close.svg";

import "./modal.css";

const Modal: React.FC<{ onClose: () => void; children: ReactNode }> = ({
  onClose,
  children,
}) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "35px",
          }}
        >
          <h3>Contact Me</h3>
          <img
            src={closeIcon}
            className="modal-close"
            onClick={onClose}
            role="button"
          />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")! // Make sure to have an element with the ID 'modal-root' in your HTML file
  );
};

export default Modal;
