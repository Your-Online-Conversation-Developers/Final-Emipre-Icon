import React from "react";
import Buttton from "./Buttton";

const SliderItem = ({ uHead, mHead, lHead, imgSrc, aLink , id}) => {
  return (
    <div className="slider-box">
      <div className="image-back">
        <img src={imgSrc} alt="slider" width="100%" />
      </div>
      <div className="header-texts">
        <h3 className="upper-heading">{uHead}</h3>
        <h1 className="middle-heading">{mHead}</h1>
        <h5 className="lower-heading">{lHead}</h5>
        <Buttton
                aLink={aLink}
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  id={id}
                  download
                />
      </div>
    </div>
  );
};

export default SliderItem;
