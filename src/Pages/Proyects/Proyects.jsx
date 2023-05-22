import React from "react";
import "./Proyects.css"
import {CardBolsillo, CardCountry} from "../../Components/Card/Card";


export default function Proyects(){
    return (
        <>
        <div className="welcome">
        <div className="containerP">
        <div className="cardsP">
            <h2>My recent works</h2>
            <br/>
            <h5>Here are a few past design projects I've worked on.</h5>
        </div>
        <div className="cardscont">
            <CardCountry />
            <CardBolsillo />
        </div>
        </div>
        </div>
        </>
    )
};