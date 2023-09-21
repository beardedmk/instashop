import React from "react";
import "./modal.css";

function Modal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal">{props.children}</div>
    </div>
  );
}

export default Modal;
