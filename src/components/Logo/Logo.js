import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div id="logo" >
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 80, width: 80 }}
      >
        <div className="Tilt-inner pa3">
          <img src={brain} alt="brain" style={{ paddingTop: "2px" }} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
