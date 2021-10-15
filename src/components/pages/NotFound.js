import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row py-5 my-5">
        <h1 className="text-center"> Not Found </h1>
        <button onClick={() => history.push("/")} className="go-back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
