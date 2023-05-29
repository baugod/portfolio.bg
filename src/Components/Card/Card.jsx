import "./Card.css";
import Country from "../Assets/countrys.jpg";
import Bolsillo from "../Assets/bolsillo feliz.jpg"


export function CardCountry() {
    return (
        <div className="card">
            <div className="face front">
                <img src={Country} alt="Country" />
                <h3>PI Countries</h3>
            </div>
            <div className="face back">
                <h3>PI Countries</h3>
                <p>Individual project done with the following skills: Node.JS, JavaScript, Express, PostgreSQL, React, React-Redux, CSS, HTML.</p>
                <div className="link"><a href="#">See Proyect</a></div>
            </div>
        </div>
    )
}

export function CardBolsillo() {
    return (
        <div className="card">
            <div className="face front">
                <img src={Bolsillo} alt="Country" />
                <h3>Bolsillo feliz</h3>
            </div>
            <div className="face back">
                <h3>Bolsillo Feliz</h3>
                <p>Individual project done with the following skills: Node.JS, JavaScript, Express, PostgreSQL, React, React-Redux, CSS, HTML.</p>
                <div className="link"><a href="#">See Proyect</a></div>
            </div>
        </div>
    )
}