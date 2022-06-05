import React from "react";
import "../../css/Button.css";
import "../../css/sections.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}>
          x
        </button>
        <h2>Category: {props.title}</h2>
        <p>{props.message}</p>
        <button className="btn start-btn">Start</button>
      </div>
    </div>
  );
};

export default Popup;
