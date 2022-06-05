import React, { useEffect, useState } from "react";

function Preloader() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <div id="spinner" className="preloader">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/SDG-wheel.png`}
        alt=""
        className="preloader-image "
      />
    </div>
  );
}

export default Preloader;
