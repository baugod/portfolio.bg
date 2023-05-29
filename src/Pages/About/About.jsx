import "./About.css";
import foto from "../../Components/Assets/Fotolinkedin.jpg";
//import { Technologies } from "../../Components/Technologies/Technologies";
import javascript from "../../Components/Assets/javascript.svg";
import css from "../../Components/Assets/css3.svg";
import html from "../../Components/Assets/html-5.svg";
import react from "../../Components/Assets/react.svg";
import node from "../../Components/Assets/nodejs.svg";
import redux from "../../Components/Assets/iredux.svg";
import postgre from "../../Components/Assets/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-96.png";

export default function About() {
    return (
        <>
            <div className="body-about">

                <div className="title-about">
                    <h1>Hello! I am a full stack developer.<span>&#160;</span></h1>
                </div>
                <div className="aboutContainer">
                    <div className="imgBauti">
                        <img src={foto} alt="Photo Bauti" className="bauti" />
                    </div>
                    <div className="text-about">
                        <h3>I am excited to introduce and share my qualities with you.
                            <br />
                            <br />
                            I am an active and responsible person, always looking to learn and grow professionally. I am loyal to my colleagues and clients, and I am committed to simplicity and order in my work. I am participative and friendly, and I fit perfectly in any work group.
                            <br />
                            <br />
                            My passion for solving problems and helping my colleagues is what drives me to work every day. I am always willing to listen and contribute innovative ideas that can improve the projects in which I am involved.

                            I am convinced that my experience in full stack development and my positive and collaborative attitude make me a great candidate for any work team.
                            <br />
                            <br />
                            I am excited to have the opportunity to work with you and achieve our goals together!
                        </h3>
                    </div>
                </div>
                <div className="about-skills">
                    <h2>Skills:</h2>
                    <div className="tech-container">
                        <div className="tech-nombre">
                            <img src={node} alt="Node JS" className="tecno-about" />
                            <h4>Node JS</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={javascript} alt="Javascript" className="tecno-about" />
                            <h4>JavaScript</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={html} alt="HTML" className="tecno-about" />
                            <h4>HTML</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={css} alt="CSS" className="tecno-about" />
                            <h4>CSS</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={react} alt="React" className="tecno-about" />
                            <h4>React JS</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={redux} alt="Redux" className="tecno-about" />
                            <h4>Redux</h4>
                        </div>
                        <div className="tech-nombre">
                            <img src={postgre} alt="PostgreSQL" className="tecno-about-postgre" />
                            <h4>PostgreSQL</h4>
                        </div>
                    </div>
                </div>
                <span>&#160;</span>
            </div>
        </>
    )
};