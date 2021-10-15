import React from "react";

const Heading = ({ h2Text, spanText = "", h4Text }) => {
  return (
    <>
      <h2>
        {h2Text}
        <span> {spanText}</span>
      </h2>
      <h4>{h4Text}</h4>
    </>
  );
};

export default Heading;
