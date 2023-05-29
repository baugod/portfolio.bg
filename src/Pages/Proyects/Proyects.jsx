import React from "react";
import "./Proyects.css"
import {CardBolsillo, CardCountry} from "../../Components/Card/Card";


export default function Proyects(){
    return (
        <>
        <div className="projects-container">
        <div className="containerP">
        <div className="cardsP">
            <h1>My recent works</h1>
            <br/>
            <h3>Here are a few past design projects I've worked on.</h3>
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