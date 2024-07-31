// Hero.js
import React from "react";
import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Explore Arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              onClick={() => setHeroCount(i)}
              className={heroCount === i ? "hero-dot orange" : "hero-dot"}
            ></li>
          ))}
        </ul>
        <div className="hero-play" onClick={() => setPlayStatus(!playStatus)}>
          <img
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause Icon"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
