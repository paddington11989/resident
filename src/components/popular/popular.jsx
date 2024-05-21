import React from "react";
import "./popular.css";
import popular_1 from "../img/popular-1.jpeg";
import popular_2 from "../img/popular-img-11.jpeg";
import popular_3 from "../img/popular-img-22.jpeg";
import popular_4 from "../img/popular-img-33.jpeg";
import Blockpopular from "./blockpopular";
import "../components.css"


export default function Popular(){
    return(
        <>
        <section className="popular">
            <div className="container">
                <h2 className="popular__title title__wrapper title-style">
                    Популярные
                </h2>

                <div className="popular__wrapper">
                    <div className="popular__item">
                        <div className="popular-img__wrapper">
                            <div className="popular-img-item item-1">
                                <img src={popular_1} alt="" />
                                <div className="black-gradient">
                                    <button className="gradient-btn mb-btn">Дизайн</button>
                                    <h3 className="georgia-title-20">Умная планировка - что это и зачем?</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">5 мин</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="popular-img-item item-2">
                                <img src={popular_2} alt="" />
                                <div className="black-gradient">
                                    <button className="gradient-btn item-btn">Роскошный отдых</button>
                                    <h3 className="georgia-title-16">Отель Орион - не только место для отдыха</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">5 мин</p>
                                    </div>
                                    
                                </div>
                                </div>
                            <div className="popular-img-item item-3">
                                <img src={popular_3} alt="" />
                                <div className="black-gradient">
                                    <button className="gradient-btn item-btn">Недвижимость</button>
                                    <h3 className="georgia-title-16">Один из самых дорогих домов Бишкека</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">3 мин</p>
                                    </div>
                                    
                                </div>
                                </div>
                            <div className="popular-img-item item-4">
                                <img src={popular_4}alt="" />
                                <div className="black-gradient">
                                    <button className="gradient-btn item-btn">Роскошный отдых</button>
                                    <h3 className="georgia-title-16">UNO City - новый город-курорт в Кыргызстане</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">4 мин</p>
                                    </div>
                                    
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="popular__item popular-block-wrapper">
                        <Blockpopular text="продукты" title="Галерея - отделочные материалы оптом и в розницу Все под одной крышей" date="1 февраля 2024 года" time="3 мин"/>
                        <Blockpopular text="дизайн" title="Галерея - отделочные материалы оптом и в розницу Все под одной крышей " date="1 февраля 2024 года" time="3 мин"/>
                        <Blockpopular text="продукты" title="Все под одной крышей: стройматериалы, сантехника, инструменты, электротовары и мн." date="1 февраля 2024 года" time="3 мин"/>
                        <Blockpopular text="интервью" title="Галерея - отделочные материалы оптом и в розницу Все под одной крышей " date="1 февраля 2024 года" time="3 мин"/>
                        <Blockpopular text="продукты" title="Все под одной крышей: стройматериалы, сантехника, инструменты, электротовары и мн." date="1 февраля 2024 года" time="3 мин"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}