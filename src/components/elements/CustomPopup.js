import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EmailForm from "./EmailForm";

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
        <EmailForm />
      </div> )}
    </Popup>
  );
};

export default CustomPopup;
