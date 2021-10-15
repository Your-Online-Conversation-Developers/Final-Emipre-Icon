import React from "react";
import Heading from "./elements/Heading";
import LiItem from "./elements/LiItem";
import EmailForm from "./elements/EmailForm";

const About = () => {
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
    <div className="about-section alt-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-text">
              <Heading
                h2Text="About"
                spanText="Empire Icon"
                h4Text="Lets learn a little bit more about Empire Icon"
              />
              <p>
                Backed by a visionary real estate leadership, Empire Icon is a regal enterprise that redefines luxury by creating grand opportunities for homeowners who dream about affording an exceptional lifestyle in Bahria Town.
              </p>
              <ul className="about-list">
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
          </div>
          <div className="col-md-5">
            <EmailForm />

            {/* .contact-form-side */}
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
  );
};

export default About;
