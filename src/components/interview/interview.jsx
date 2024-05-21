import React from "react";
import "./interview.css";
import Slider from "react-slick";


export default function Interview(){
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 450,
            settings: {
              dots:true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      };
    return(
        <>
        <section className="interview">
            <div className="container">
        <div className="top-slider-interview">
            <Slider {...settings}>
      <div className="interview-slider">
       <div className="interview__wrapper">
        <div className="interview__desribtion">
        <button class="gradient-btn">интервью</button>
        <p className="interview-person"><span className="person-uppercase">Владислав Попов </span>— основатель дизайн-студии Freedom Group</p>
        <div className="block-date-grey">
               <p className="date">1 февраля</p>
               <div className="ellipse"></div>
               <p className="time">5 мин</p>
            </div>
            <a href="#" className="interview-btn">Читать статью</a>
        </div>

        <div className="interview__img"></div>
       </div>
      </div>
      <div className="interview-slider color-2">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ex, recusandae ipsum autem exercitationem nam tenetur hic impedit adipisci, alias in sapiente amet et temporibus itaque repellendus. Eveniet tempore omnis a ea commodi, mollitia doloremque numquam, sunt aspernatur voluptatem iste distinctio maiores possimus tempora debitis illum aut quis, adipisci error.</h3>
      </div>
      <div className="interview-slider color-3">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo expedita dicta nihil libero obcaecati iusto, aperiam odio perspiciatis ratione autem quis dolores excepturi iste voluptate provident eos repellat. Voluptate nemo natus, laboriosam hic, fugiat optio modi fuga molestiae enim maxime quidem explicabo architecto a atque aspernatur libero obcaecati? Saepe, blanditiis.</h3>
      </div>
      
    </Slider>
    </div>
            </div>
        </section>
        
        </>
    )
}