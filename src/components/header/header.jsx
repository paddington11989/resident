import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./header.css";
import "./slider.css";
import logo from "../img/logo.svg"
import arrow from "../img/arrow-dropdown.svg"
import search from "../img/search.svg";
import banner_slider from "../img/slider-banner.svg";
import { useState } from "react";
import closed from "../img/closed.svg";


export default function Header(){
 
  const [isOpen, setIsOpen] = useState(false);
    const [isNavlist, setIsnavlist] = useState(false);
    const burgerMenu = () => {
      setIsOpen((open) => !open);
        setIsnavlist((open)=>!open)
    }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
        <>
        
        <header className="header">
            <a href="#" className="header__logo-link">
                <img src={logo} alt="" />
            </a>
        </header>
        <section className="top-promo">
            <div className="container container-wrapper">
              <div className={`promo__wrapper ${isOpen ? 'isopen' : ''}`}>
                <div className={`promo__nav-list ${isNavlist ? 'nav__list-open' : ''}`}>
                  <div className="burger-closed" onClick={burgerMenu}><img src={closed} alt="" /></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Недвижимость </a><img src={arrow} alt="" /></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Роскошный отдых</a> <img src={arrow} alt="" /></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Дизайн</a> <img src={arrow} alt="" /></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Продукты</a></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Интервью</a></div>
                  <div className="promo__nav-item"><a className="nav-item-link" href="#">Контакты</a></div>
                </div>
                  <div className="promo__search">
                    <img className="promo__search-img" src={search} alt="" />
                  </div>
               </div>

      
              <div className="burger__wrapper">
                 <div className="burger-block" onClick={burgerMenu}>
                     <div className="burger"></div>
                     <div className="burger_one"></div>
                     <div className="burger_two"></div>
                 </div>
                <a href="" className="burger-title-link"><h2 className="burger-title">Resident</h2></a>
                <div className="promo__search">
                    <img className="promo__search-img" src={search} alt="" />
                  </div>
              </div>

               
            </div>
        </section>





        <section className="top-screen-slider">
          <div className="container container-wrapper">
            <div className="top-screen-slick-slider">
            <div className="slider-container">
      <Slider {...settings}>
        <div className="slider_img">
          <img src={banner_slider} alt="" />
          <div className="slider_img-text">
          <h2 className="slider-title"><span className="slider-title-uppercase">Монолит</span> - создаем надежность и комфорт вместе!</h2>
           <p className="slider-desribtion">-это первый в своем роде комплекс, который объединяет в себе бизнес-центр и торговый комплекс</p>
        </div>
        </div>
        <div className="slider_img">
        <img src={banner_slider} alt="" />
        </div>
        <div className="slider_img">
        <img src={banner_slider} alt="" />
        </div>
      </Slider>
    </div>
            </div>
          </div>
        </section>
        
        </>
    )
}