import React from "react";
import RequestForm from "./RequestForm";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const CustomPopup = ({ title , cposition}) => {
  const contentStyle = { background: "#fff", width: "50%" };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };

  return (
    <Popup
      trigger={<button className="button">{title}</button>}
      position={cposition}
      {...{ contentStyle, overlayStyle }}
    >
       {close => (
      <div>
      <button className="close" onClick={close}>
          &times;
        </button>
        <RequestForm />
      </div> )}
    </Popup>
  );
};

export default CustomPopup;
