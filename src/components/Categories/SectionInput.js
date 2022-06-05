import React from "react";
import "../../css/sections.css";

function SectionInput(props) {
  const { image, id, ...cardProps } = props;
  return (
    <div className="card-element" onClick={props.handleClose}>
      <div className="cardContent-element">
        <img
          src={process.env.PUBLIC_URL + props.image}
          alt="Section-images"
          className="section-img"
        />
        <div className="overlay-section"></div>
        <div className="sectionsTitle">
          <h5>{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default SectionInput;
