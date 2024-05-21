import React from "react";
import "./products.css";
import title_arrow from "../img/title-arrow.svg";
import Blockproducts from "./blockproducts";
import products_1 from "../img/rest-1.jpeg";
import products_2 from "../img/products-img-22.jpeg";
import products_3 from "../img/products-img-33.jpeg";
import products_4 from "../img/products-img-44.jpeg";
import products_5 from "../img/products-img-55.png";
import products_6 from "../img/products-img-66.svg";
import "../components.css"


export default function Products(){
    return(
        <>
        <section className="products">
            <div className="container">
            <div className="title__wrapper">
                  <h2 className="title-style mb-0">продукты</h2>
                  <div className="products-line"></div>
                  <div className="building-img"><img src={title_arrow} alt="" /></div>
                </div>
              
                <div className="products__wrapper">
                    <div className="products__item">
                    <div className="products-img-item">
                                <div className="black-gradient">
                                    <button className="gradient-btn mb-btn">роскошный отдых</button>
                                    <h3 className="georgia-title-20 width-title">Tesoro Home - текстильная компания в области декора с 2005 года</h3>
                                    <div className="block-date-light">
                                    <p className="date">1 февраля 2024</p>
                                    <div className="ellipse-light"></div>
                                    <p className="time">5 мин</p>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <div className="products__item adaptive-width">
                        <Blockproducts text="продукты" title="Галерея - отделочные материалы оптом и в розницу" date="1 февраля 2024" time="3 мин" rest_block_photo={products_1}/>
                        <Blockproducts text="продукты" title="Все под одной крышей: стройматериалы, сантехника, инструменты, электротовары и мн." date="1 февраля 2024" time="1 мин" rest_block_photo={products_2}/>
                        <Blockproducts text="продукты" title="Lustra_kg - люстры премиум качества" date="1 февраля 2024" time="3 мин" rest_block_photo={products_3}/>
                        <Blockproducts className="products-4" text="продукты" title='Миссия компании "Matkasym" - создавать товары для уюта в доме и комфорта в городе' date="1 февраля 2024" time="3 мин" rest_block_photo={products_4}/>
                        <Blockproducts className="products-5" text="роскошный отдых" title="Кухонные гарнитуры на заказ"  date="1 февраля 2024" time="1 мин" rest_block_photo={products_5}/>
                        <Blockproducts className="products-6" text="роскошный отдых" title="Palazzo - ресторан премиум-класса"  date="1 февраля 2024" time="1 мин" rest_block_photo={products_6}/>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}