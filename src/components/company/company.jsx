import React from "react";
import Slider from "react-slick";
import "./company.css";
import company_1 from "../img/company-1.svg";
import company_2 from "../img/company-2.svg";
import company_3 from "../img/company-3.svg";



export default function Company(){
  
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1320,
              settings: {
                slidesToShow:3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2.7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
      };
      
    return(
        <>
        <section className="company">
            <div className="container container-wrapper">
                <div className="company__wrapper">
                    <div className="company-advice">
                        <h2 className="title-style company-title">Предложения от компании</h2>
                        <div className="company-title-line"></div>
                    </div>
                    <div className="company-slider-wrapper">
                    <div className="company-slider">
                    <Slider {...settings}>
      <div className="company-img">
        <img src={company_1} alt="" />  
      </div>
      <div className="company-img">
      <img src={company_2} alt="" />
      </div>
      <div className="company-img">
      <img src={company_3} alt="" />
      </div>
      <div className="company-img forth-img">
      </div>
    </Slider>
    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}