import "./Card.css";
import Country from "../Assets/countrys.jpg";
import Bolsillo from "../Assets/bolsillo feliz.jpg"


export function CardCountry(){
    return (
        <div className="flip-card">
        <figure className="imghvr-fade">
            <img src={Country} alt="Countries" className="imaCountry"/>
            <figcaption>
                <h3 className="ih-fade-up">PI Countries</h3>
                <p className="ih-zoom-in">
                <i>Individual project done with the following skills: Node.JS, JavaScript, Express, PostgreSQL, React, React-Redux, CSS, HTML.</i>
                </p>
                <button className="" href="https://github.com/baugod/Pi-Country-Henry">GO TO PROJECT</button>
            </figcaption>
        </figure>
        </div>
    )
}

export function CardBolsillo(){
    return (
        <div className="flip-card">
        <figure className="imghvr-fade">
            <div className="imaCountry">
            <img src={Bolsillo} alt="Countries" className="imaCountry" />
            </div>
            <figcaption>
                <h3 className="ih-fade-down">Bolsillo Feliz</h3>
                <p className="ih-zoom-in">
                <i>Individual project done with the following skills: Node.JS, JavaScript, Express, PostgreSQL, React, React-Redux, CSS, HTML.</i>
                </p>
                <button className="ih-fade-up ih-delay-lg button" href="https://github.com/baugod/PF-Bolsillo-Feliz">GO TO PROJECT</button>
            </figcaption>
        </figure>
        </div>
    )
}




// export function CardBolsillo(){
//     return (
//         <div className="flip-card">
//     <div className="flip-card-inner">
//         <div className="flip-card-front">
//             <div className="imaCountry">
//             </div>
//             <h3>PI Countries</h3>
//         </div>
//         <div className="flip-card-back">
            
//         </div>
//     </div>
// </div>
//     )
// }

// export function CardCountry(){
//     return (
//         <div className="flip-card">
//     <div className="flip-card-inner">
//         <div className="flip-card-front">
//            <img src={Bolsillo} alt="Bolsillo feliz" />
//            <h3>Bolsillo Feliz</h3>
//         </div>
//         <div className="flip-card-back">
          
//         </div>
//     </div>
// </div>
//     )
// }
