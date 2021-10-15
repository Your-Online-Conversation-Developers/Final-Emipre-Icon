import React from "react";
import { useHistory } from "react-router";
import { SRLWrapper } from "simple-react-lightbox";
import Heading from "../elements/Heading";
import LiItem from "../elements/LiItem";

const EmpireBusiness = () => {
  const history = useHistory();
  const liContent = [
    {
      id: 1,
      liText: "2500 Sq Yards",
      iconVal: "true",
      iconClass: "icofont icofont-ruler-pencil",
    },
    {
      id: 2,
      liText: "Ground + 26 Floors",
      iconVal: "true",
      iconClass: "icofont icofont-bricks",
    },
    {
      id: 3,
      liText: "Living Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-multimedia",
    },
    {
      id: 4,
      liText: "Bed Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-bed",
    },
    {
      id: 5,
      liText: "Bath Rooms",
      iconVal: "true",
      iconClass: "icofont icofont-bathtub",
    },
    {
      id: 6,
      liText: "Car parking",
      iconVal: "true",
      iconClass: "icofont icofont-car-alt-2",
    },
    {
      id: 7,
      liText: "Kitchen",
      iconVal: "true",
      iconClass: "icofont icofont-fork-and-knife",
    },
    {
      id: 8,
      liText: "Gym",
      iconVal: "true",
      iconClass: "icofont icofont-gym-alt-3",
    },
    {
      id: 9,
      liText: "2024 Completion Date",
      iconVal: "true",
      iconClass: "icofont icofont-calendar",
    },
    {
      id: 10,
      liText: "Water Tank",
      iconVal: "true",
      iconClass: "icofont icofont-water-drop",
    },
  ];
  return (
    <div className="container project-item1">
      <div className="row">
        <div className="col-sm-12 col-md-6 mt-2">
          <Heading
            h2Text="Empire"
            spanText="Business"
            h4Text="Lets learn a little bit more about Empire Business"
          />
          <p>
            Gain is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure.
          </p>
          <ul className="project-list">
            {liContent.map((item) => (
              <LiItem
                key={item.id}
                liText={item.liText}
                iconVal={item.iconVal}
                iconClass={item.iconClass}
              />
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 mt-2">
          <img
            src="images/projects/empire-business.webp"
            alt="project"
            className="project-image"
          />
        </div>
      </div>

      <div className="row project-gallery">
      <SRLWrapper>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/4.webp" className="large-view">
              <img
                src="images/gallery/4.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/5.webp" className="large-view">
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/6.webp" className="large-view">
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/4.webp" className="large-view">
              <img
                src="images/gallery/4.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/5.webp" className="large-view">
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/6.webp" className="large-view">
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/5.webp" className="large-view">
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a href="images/gallery/6.webp" className="large-view">
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        </SRLWrapper>
        {/* .col */}
      </div>

      <div className="row btn-center">
        <button onClick={() => history.push("/")} className="go-back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EmpireBusiness;
