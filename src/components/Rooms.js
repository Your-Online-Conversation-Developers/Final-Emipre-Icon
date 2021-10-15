import React from "react";
import Heading from "./elements/Heading";
import LiItem from "./elements/LiItem";
import Buttton from "./elements/Buttton";

const Rooms = () => {
  const liContent = [
    {
      id: 1,
      liText: "3623 Sq. Ft",
    },
    {
      id: 2,
      liText: "Bedrooms",
    },
    {
      id: 3,
      liText: "Apartments",
    },
    {
      id: 4,
      liText: "Drawing",
    },
    {
      id: 5,
      liText: "Lounge",
    },
    {
      id: 6,
      liText: "Maid",
    },
    {
      id: 7,
      liText: "2 Car Parking",
    },
  ];
  return (
    <div className="room-features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="room-image">
              <img
                src="images/rooms/goldb.webp"
                className="img-responsive"
                alt="rooms"
              />
            </div>
          </div>
          {/* .col */}
          <div className="col-md-6">
            <div className="room-features-texts">
              <Heading
                h2Text="Gold Luxury Duplex"
                h4Text="Type B | West Open"
              />
              <ul>
                {liContent.map((item) => (
                  <LiItem key={item.id} liText={item.liText} />
                ))}
              </ul>
              <Buttton
                  aLink="pdf/duplex.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  id="gl_b1"
                  download
                />
            </div>
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
  );
};

export default Rooms;
