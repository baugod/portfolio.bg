import email from "../../Components/Assets/icons8-gmail.svg";
import linkedin from "../../Components/Assets/linkedin.svg";
import instagram from "../../Components/Assets/instagram.svg";
import wpp from "../../Components/Assets/whatsapp.svg";
import henry from "../../Components/Assets/henry.jpg";
import cv from "../../Components/Assets/Curriculum.png";
import "./Contact.css"

export default function Contact() {

    function link(url) {
        window.open(url, "_blank")
    }

    return (
        <>
            <div className="contact">
                <h1>Contact whith me:</h1>
                <br />
                <div className="contact-container">
                    <img src={email} alt="Email" className="img-contact" />
                    <a href="mailto:bautistagodoy060@gmail.com">
                        <button className="button-cont">Send Email</button>
                    </a>
                </div>
                <div className="contact-container">
                    <img src={wpp} alt="WhatsApp" className="img-contact" />

                    <button onClick={e => link("https://wa.me/5493407418729?text=Hello%20Bautista,%20I%20saw%20your%20contact%20in%20your%20portfolio")} className="button-cont">Send WhatsApp</button>

                </div>
                <div className="contact-container">
                    <img src={linkedin} alt="LinkedIn" className="img-contact" />
                    <button onClick={e => link('https://www.linkedin.com/in/bautista-godoy/')} className="button-cont">contact via linkedin</button>
                </div>
                <div className="contact-container">
                    <img src={henry} alt="Henry" className="img-contact" />
                    <button onClick={e => link('https://www.talent.soyhenry.com/candidate/11310')} className="button-cont">contact via Henry</button>
                </div>
                <div className="contact-container">
                    <img src={instagram} alt="Instagram" className="img-contact" />
                    <button onClick={e => link('https://www.instagram.com/bautigodoy7/')} className="button-cont">contact via Instagram</button>
                </div>
                <div className="contact-container">
                    <img src={cv} alt="CV" className="cv" />
                    <a href="./Cv IT 05-23 - Bautista Godoy.pdf" download>
                        <button className="button-cont">Download CV</button>
                    </a>
                </div>
            </div>
        </>
    )
}  