import React from "react";
import { Link } from "react-router-dom";

const Buttton = ({ aText, aLink="/", dataEffect = "", classes, target = "", id }) => {
  return (
    <>
      <Link
        to={aLink}
        data-effect={dataEffect}
        className={classes}
        target={target}
        id={id}
      >
        {aText}
      </Link>
    </>
  );
};

export default Buttton;
