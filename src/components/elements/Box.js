import React from "react";

const Box = ({ iconClass, h6Text, pText = "", placeImg = "" }) => {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="single-place">
        <i className={iconClass} />
        {placeImg ? (
          <img src={placeImg} className="img-responsive" alt="Gallery" />
        ) : (
          ""
        )}
        <h6>{h6Text}</h6>
        <p>{pText}</p>
      </div>
    </div>
  );
};

export default Box;
