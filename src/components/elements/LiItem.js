import React from "react";

const LiItem = ({liText, iconVal, iconClass}) => {
  return (
    <li>
        {
            iconVal && <i className={iconClass} />
        }
      {liText}
    </li>
  );
};

export default LiItem;
