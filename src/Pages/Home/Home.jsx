import { Link } from "react-router-dom";
import "./Home.css"; 

export default function Home() {
    return (
        <div className="welcome">
            <div className="titles">
                <h4>Hi, my name is</h4>
                <h1>Bautista Godoy</h1>
                <h3>A pleasure!</h3>
                <br />
                <h2>I am a full stack developer. Young, very active and with a lot of projection.</h2>
                    <br />
                <h2>Currently listening to job offers.</h2>
                <h2>Do you want to know more about me?</h2>
            </div>
            <br />
            <div className="button-container">
                <Link to="/about">
            <button className="button-home"> About Me </button>
                </Link>
            </div>
            </div>
        
    );
};