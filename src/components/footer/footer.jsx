import React from "react";
import "./footer.css";
import logo from "../img/logo.svg"
import footer_1 from "../img/footer-1.svg";
import footer_2 from "../img/footer-2.svg";
import footer_3 from "../img/footer-3.svg";
import footer_4 from "../img/footer-4.svg";

export default function Footer(){
    return(
        <>
        <section className="footer">
            <div className="container container-wrapper">
                <div className="footer-logo-wrapper">
                    <a href="#" className="footer-img-logo"><img src={logo} alt="" /></a>
                    <a href="" className="footer-text-logo"><h2>Resident</h2></a>
                    <div className="footer-link">
                        <a href="#" className="footer-link-item"><img src={footer_1} alt="" /></a>
                        <a href="#" className="footer-link-item"><img src={footer_2} alt="" /></a>
                        <a href="#" className="footer-link-item"><img src={footer_3} alt="" /></a>
                        <a href="#" className="footer-link-item"><img src={footer_4} alt="" /></a>
                    </div>
                </div>
                    <div className="footer-line"></div>

                <div className="footer-block__wrapper">
                    <div className="footer-block__item">
                        <p className="footer-block-text footer-text">- ваш гид в мире строительства, объединяющий всех, кто стремится создавать надежные и удобные дома, а также поможет читателям расширить свой кругозор и узнать что-то новое</p>
                    </div>
                    <div className="footer-block__item">
                        <h6 className="footer__item-title">Категории:</h6>
                        <a href="" className="footer__item-link footer-text">Недвижимость</a>
                        <a href="" className="footer__item-link footer-text">Роскошный отдых</a>
                        <a href="" className="footer__item-link footer-text">Интервью</a>
                        <a href="" className="footer__item-link footer-text">Дизайн</a>
                        <a href="" className="footer__item-link footer-text">Продукты</a>
                    </div>
                    <div className="footer-block__item">
                    <h6 className="footer__item-title">Компания:</h6>
                        <a href="" className="footer__item-link footer-text">О нас</a>
                        <a href="" className="footer__item-link footer-text">Контакты</a>
                    </div>
                    <div className="footer-block__item text-right">
                    <h6 className="footer__item-title fs-20">г. Бишкек, ул.<br/> Нуркамала 29</h6>
                        <a href="" className="footer__item-link footer-text footer-text-colored">График работы: с 9:00 до 20:00</a>
                        <a href="" className="footer__item-link footer-link">journal.resident.kg@gmail.com</a>
                    </div>
                </div>
                <div>
                    <p className="footer-mini-text">Все права защищены</p>
                </div>
            </div>
        </section>
        </>
    )
}