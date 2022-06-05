import React, { useState } from "react";
import Icons from "../Icons";
import SectionInput from "./SectionInput";
import "../../css/sections.css";
import Popup from "./Popup";

function Sections() {
  const [popup, setPopup] = useState(false);
  const [message, setMessage] = useState("");

  const togglePopup = (e) => {
    const key = cardContent.id;
    setPopup(!popup);
    console.log("I worked");
    console.log(e.target.id);
  };

  const cardContent = [
    {
      id: 1,
      image: "/assets/images/Partnership-image.jpg",
      title: "Partnership",
      message: "There are Eight (8) questions in this section",
    },
    {
      id: 2,
      image: "/assets/images/Peace-image.jpg",
      title: "Peace",
      message: "There are Eight (8) questions in this section",
    },
    {
      id: 3,
      image: "/assets/images/People-image.jpg",
      title: "People",
      message: "There are Fifty-seven (57) questions in this section",
    },
    {
      id: 4,
      image: "/assets/images/Planet-image.jpg",
      title: "Planet",
      message: "There are Eighty-eight (88) questions in this section",
    },
    {
      id: 5,
      image: "/assets/images/Prosperity-image.jpg",
      title: "Prosperity",
      message: "There are Fifteen (15) questions in this section",
    },
    {
      id: 6,
      image: "/assets/images/Purpose-image.jpg",
      title: "Purpose",
      message: "There are Six (6) questions in this section",
    },
  ];
  return (
    <>
      <Icons />
      <div className="sections-container">
        <div className="sections-wrapper ">
          {cardContent.map((card) => (
            <SectionInput handleClose={togglePopup} key={card.id} {...card} />
          ))}
        </div>
      </div>
      {popup && (
        <div>
          <Popup
            handleClose={togglePopup}
            key={cardContent.id}
            message={cardContent.message}
            title={cardContent.title}
          />
        </div>
        // <div className="sections-wrapper ">
        //   {cardContent.map((card) => (
        //     <Popup
        //       handleClose={togglePopup}
        //       title={card}
        //       key={card.id}
        //       {...card}
        //       value={message}
        //       message={card.message}
        //       // onChange={(e) => setMessage(e.target.key)}
        //     />
        //   ))}
        // </div>
      )}
    </>
  );
}

export default Sections;
