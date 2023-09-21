import React, { useState } from "react";
import Modal from "../modals/Modal";
import loading from "../assets/Loading_Spinner.svg";
import { useNavigate } from "react-router-dom";

function BuyConfirmation(props) {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(-1);
  }, 2400);

  return (
    <div>
      <Modal setOpen={props.setClose}>
        <div className="orderConfirmationModal">
          <h3>orderPlaced Succesfully</h3>
        </div>
      </Modal>
    </div>
  );
}

export default BuyConfirmation;
