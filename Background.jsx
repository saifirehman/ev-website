// Background.js
import React from "react";
import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  const images = [image1, image2, image3];
  return playStatus ? (
    <video className="background fade-in" autoPlay loop muted>
      <source src={video1} type="video/mp4" />
    </video>
  ) : (
    <img src={images[heroCount]} className="background fade-in" alt="" />
  );
};

export default Background;
