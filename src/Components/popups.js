import React from "react";

export const popups = (props) => {
  return props.trigger ? (
    <div className="popups">
      <div className="popupinner">
        <button className="close">close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default popups;
