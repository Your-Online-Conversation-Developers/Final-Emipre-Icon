import React from "react";
import { Button } from "react-scroll";
const HeaderSlider = () => {
  
  return (
    <div className="header-section header-slider desktop-slider" id="header">
      
      <div
        className="single-hSlider hSlide-one"
        style={{
          background: "url(images/bg/diamond-luxury.webp) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-texts">
                  <h3 className="appear-from-top">2330 Sq. Ft</h3>
                  <h1 className="appear-from-left">DIAMOND LUXURY </h1>
                  <h5 className="appear-from-right">
                    TYPE A | 2 SIDE CORNER
                  </h5>
                  <Button
                    className="button sm appear-from-bottom"
                    type="submit"
                    value="REQUEST A CALL BACK"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  />
                </div>
              </div>
            </div>

            {/* .row */}
          </div>
        </div>
        {/* .overlay */}
      </div>


      <div
        className="single-hSlider hSlide-one"
        style={{
          background: "url(images/bg/gold-luxury.webp) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-texts">
                  <h3 className="appear-from-top">1835 Sq. Ft</h3>
                  <h1 className="appear-from-left">GOLD LUXURY</h1>
                  <h5 className="appear-from-right">
                    TYPE A | 2 SIDE CORNER
                  </h5>
                  <Button
                    className="button sm appear-from-bottom"
                    type="submit"
                    value="REQUEST A CALL BACK"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>

      <div
        className="single-hSlider hSlide-one"
        style={{
          background: "url(images/bg/sliver-luxury.webp) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-texts">
                  <h3 className="appear-from-top">1685 Sq. Ft</h3>
                  <h1 className="appear-from-left">SILVER LUXURY</h1>
                  <h5 className="appear-from-right">
                     TYPE A | 2 SIDE CORNER
                  </h5>
                  <Button
                    className="button sm appear-from-bottom"
                    type="submit"
                    value="REQUEST A CALL BACK"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>
    
      <div
        className="single-hSlider hSlide-one"
        style={{
          background: "url(images/bg/slider-3.webp) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-texts">
                  <h3 className="appear-from-top">1685 Sq. Ft</h3>
                  <h1 className="appear-from-left">SILVER</h1>
                  <h5 className="appear-from-right">
                    TYPE A | 2 SIDE CORNER
                  </h5>
                  <Button
                    className="button sm appear-from-bottom"
                    type="submit"
                    value="REQUEST A CALL BACK"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>
    
    </div>
  );
};

export default HeaderSlider;
