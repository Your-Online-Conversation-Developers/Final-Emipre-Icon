import React from "react";
import CustomPopup from "./elements/CustomPopup";
import CtaImg from "../bgs/cta.webp"

const CtaSection = () => {

  return (
    <div className="cta-section" id="cta-section" style={{backgroundImage: `url(${CtaImg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>See all This in Person</h2>
              <h4>Schedule a Meeting With Our Agent</h4>

              <CustomPopup title="Request a Call Back" cposition="center center"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
