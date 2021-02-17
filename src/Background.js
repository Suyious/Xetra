import React from "react";
import Backimage from "./media/BackgroundPic.png";

function Background({ scrolled }) {
  return (
    <div className="background">
      <img className="heroback" src={Backimage} alt="" />
      <div className={`ribbon ${scrolled ? "vanish" : "appear"}`}></div>
    </div>
  );
}

export default Background;
