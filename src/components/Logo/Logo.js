import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import robot from "./robot.png";

const Logo = () => {
  return (
    <div id="logo" >
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 250, width: 260 }}
      >
        <div className="Tilt-inner pa3">
          <img src={robot} alt="robot" style={{ paddingTop: "2px" }} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
