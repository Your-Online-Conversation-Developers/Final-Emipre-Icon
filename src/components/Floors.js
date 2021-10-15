import React from "react";
import Heading from "./elements/Heading";
import Buttton from "./elements/Buttton";
import Slider from "react-slick";


const Floors = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="floors-section" id="floorplans">
      <div className="container">
        <Slider {...settings}>
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/diamond.webp" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading
                  h2Text="Diamond Luxury"
                  h4Text="Type A | 2 Side Corner"
                />
                <Buttton
                  aLink="pdf/diamond.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  id="dl_a1"
                  download
                />

                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>2330 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>4 bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>

          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/gold.webp" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading h2Text="Gold Luxury" h4Text="Type B | West Open" />
                <Buttton
                  aLink="pdf/gold.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  id="gl_a1"
                  download
                />
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>1835 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>3 bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>

          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/silver.webp" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading h2Text="Silver Luxury" h4Text="Type C | Corner" />
                <Buttton
                  aLink="pdf/silver.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  id="sl_a1"
                  download
                />
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>1685 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>2 bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* .container */}
    </div>
  );
};

export default Floors;
