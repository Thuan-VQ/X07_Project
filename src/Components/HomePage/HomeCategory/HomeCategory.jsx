import React, { useContext } from "react";
import "../HomeCategory/HomeCategory.css";
import Slider from "react-slick";
import "../HomeCategory/Slick.css";
import "../HomeCategory/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { JobContext } from "../../../Context/JobContext";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { allCategory } = useContext(JobContext);

  return (
    <div className="home-category">
      <div className="navigate-content-category">
        <h1 className="header-home-category">Việc làm theo ngành nghề</h1>
        <Link>
          <p className="all-category">
            xem tất cả{" "}
            <span>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </p>
        </Link>
      </div>
      <div className="content-home-category"></div>
      <Slider {...settings}>
        {allCategory?.map((item, value) => {
          let color = "#";
          for (let i = 0; i < 3; i++)
            color += (
              "0" +
              Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(
                16
              )
            ).slice(-2);
          const bgColor = color;
          return (
            <div className="slide-item">
              <div
                className="item"
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <h1 className="name-category">{item.name}</h1>
                <p className="amount-jobs">việc làm</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
