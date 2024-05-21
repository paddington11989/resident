import React from "react";
import "./building.css";


export default function Blockbuilding({building__item_img,building__item_title, building__item_text,date,time }){
    return(
        <>
        <div className="building__item">
            <div className="building__item-img"><img src={building__item_img} alt="" /></div>
            <p className="item-text">{building__item_text}</p>
            <h4 className="item-title">{building__item_title}</h4>
            <div className="block-date-grey">
               <p className="date">{date}</p>
               <div className="ellipse"></div>
               <p className="time">{time}</p>
            </div>
        </div>
        </>
    )
}