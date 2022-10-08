import React, { useState } from "react";
import "./Slider.css";
import { images } from "./SliderData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Slider() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <Navbar />
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        {/* <Link to="/Resumetemp2"> */}
          <div className="center">
            <h1 className="slider-h1" >{images[currImg].title}</h1>
            <p className="slider-p" >{images[currImg].subtitle}</p>
          </div>
        {/* </Link> */}
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
        <Link to="/Body">
        <button className="slider-button">Use This Template</button>
        </Link>
    </div>
  );
}

export default Slider;