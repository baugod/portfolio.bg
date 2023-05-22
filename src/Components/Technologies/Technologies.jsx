import javascript from "../Assets/javascript.svg";
import css from "../Assets/css3.svg";
import html from "../Assets/html-5.svg";
import react from "../Assets/react.svg";
import firebase from "../Assets/firebase.svg";
import node from "../Assets/nodejs.svg";
import redux from "../Assets/iredux.svg";
import postgre from "../Assets/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-96.png";

export function Technologies(){
    return(
        <>
                <div className="tech-container">
                    <img src={node} alt="Node JS" className="tecno-about"/>
                    <img src={javascript} alt="Javascript" className="tecno-about"/>
                    <img src={html} alt="HTML" className="tecno-about"/>
                    <img src={css} alt="CSS" className="tecno-about" />
                    <img src={react} alt="React" className="tecno-about" />
                    <img src={redux} alt="Redux" className="tecno-about"/>
                    <img src={postgre} alt="PostgreSQL" className="tecno-about"/>
                    <img src={firebase} alt="Firebase" className="tecno-about" />
                </div>
        </>
    )
}