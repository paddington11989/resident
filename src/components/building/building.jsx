import React from "react";
import "./building.css";
import title_arrow from "../img/title-arrow.svg";
import Blockbuilding from "./blockbuilding";
import building_1 from "../img/building-img-1.svg";
import building_2 from "../img/building-img-2.svg";
import building_3 from "../img/building-img-3.svg";
import building_4 from "../img/building-img-4.svg";

export default function Building(){
    return(
        <>
         <section className="building">
            <div className="container">
                <div className="title__wrapper">
                  <h2 className="title-style mb-0"> недвижимость</h2>
                  <div className="building-line"></div>
                  <div className="building-img"><img src={title_arrow} alt="" /></div>
                </div>
                <div className="building__wrapper">
                    <Blockbuilding building__item_img={building_1} building__item_title="Москва - жилой дом премиум-класса" building__item_text="Недвижимость" date="1 февраля 2024" time="3 мин"/>
                    <Blockbuilding building__item_img={building_2} building__item_title="UNO City - новый город-курорт в Кыргызстане" building__item_text="Недвижимость" date="1 февраля 2024" time="3 мин"/>
                    <Blockbuilding building__item_img={building_3} building__item_title="Взять квартиру в ипотеку в Бишкеке: миссия выполнима?" building__item_text="Недвижимость" date="1 февраля 2024" time="1 мин"/>
                    <Blockbuilding building__item_img={building_4} building__item_title="Секреты Дубай, недвижимость за рубежом" building__item_text="Недвижимость" date="1 февраля 2024" time="3 мин"/>
                </div>
            </div>
         </section>
        </>
    )
}