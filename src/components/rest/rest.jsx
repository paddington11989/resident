import React from "react";
import "./rest.css";
import title_arrow from "../img/title-arrow.svg";
import "../components.css"
import Blockrest from "./blockrest";
import rest_1 from "../img/rest-1.svg";
import rest_2 from "../img/rest-2.svg";
import rest_3 from "../img/rest-3.svg";


export default function Rest(){
    return(
        <>
          <section className="rest">
            <div className="container">
            <div className="title__wrapper">
                  <h2 className="title-style mb-0 rest-title">роскошный отдых</h2>
                  <div className="rest-line"></div>
                  <div className="building-img"><img src={title_arrow} alt="" /></div>
                </div>

                <div className="rest__wrapper">
                    <div className="rest__item">
                    <div className="rest-img-item">
                                <div className="black-gradient">
                                    <button className="gradient-btn mb-btn">роскошный отдых</button>
                                    <h3 className="georgia-title-20 width-title">Отель Орион - не только место для отдыха</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">5 мин</p>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <div className="rest__item adaptive-width">
                        <Blockrest text="роскошный отдых" title="Sumbule - SPA центр незабываемого отдыха, красоты и здоровья"  date="1 февраля 2024" time="3 мин" rest_block_photo={rest_1}/>
                        <Blockrest text="роскошный отдых" title="Palazzo - ресторан премиум-класса"  date="1 февраля 2024" time="1 мин" rest_block_photo={rest_2}/>
                        <Blockrest text="роскошный отдых" title="Москва - жилой дом премиум-класса"  date="1 февраля 2024" time="3 мин" rest_block_photo={rest_3}/>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}