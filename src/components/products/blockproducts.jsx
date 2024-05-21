import React from "react";
import "./products.css";


export default function Blockproducts({text,title, date, time, rest_block_photo}){
    return(
        <>
          <div className="rest-block-wrapper">
          <div className="rest-block-item">
          <p className="item-text">{text}</p>
            <h4 className="item-title">{title}</h4>
            <div className="block-date-grey">
               <p className="date">{date}</p>
               <div className="ellipse"></div>
               <p className="time">{time}</p>
            </div>
            </div>
            <div className="rest-block-img">
                <img src={rest_block_photo} alt="" />
            </div>
          </div>
        </>
    )
}