import React, { useState } from "react";
import bannerImg from "../../../assets/Images/banner.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const [doteActive, setDoteActive] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mouseHover: false,
    beforeChange: (prev, next) => {
      setDoteActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "34%",
          left: "-40%",
        }}
      >
        <li style={{ display: "inline-block" }}>{dots} </li>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === doteActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "-48%",
                transform: "translateY(-50%)",
              }}
            >
              <li style={{ display: "inline-block" }}>{dots} </li>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === doteActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      color: "transparent",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <section className="Banner">
        <div>
          <Slider {...settings}>
            <div>
              <Link to="/">
                <img src={bannerImg} alt="banner" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src={bannerImg} alt="banner" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src={bannerImg} alt="banner" />
              </Link>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Banner;
