import React from "react";
import "./popular.css";

export default function Blockpopular({title,text,date,time}){
    return(
        <>
        <div className="popular-newsletter">
            <p className="item-text">{text}</p>
            <h4 className="item-title">{title}</h4>
            <div className="block-date-grey">
               <p className="date">{date}</p>
               <div className="ellipse"></div>
               <p className="time">{time}</p>
            </div>
        </div>
        </>
    )
}