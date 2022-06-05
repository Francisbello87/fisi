import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("signinpage");
    }, 5000);
  }, [navigate]);
  return (
    <div className="onboarding">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/onboarding.jpg`}
        alt=""
        className="onboarding-image"
      />
      <div className="overlay"></div>
      <h1 className="onboarding-text">Food Industry Sustainability Index</h1>
    </div>
  );
}

export default HomePage;
