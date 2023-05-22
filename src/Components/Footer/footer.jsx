import "./footer.css";
import instagram from "../Assets/instagram.svg";
import linkedin from "../Assets/linkedin.svg";
import github from "../Assets/icons8-github-blanco.svg";
import email from "../Assets/icons8-gmail.svg";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="redes_sociales">
        <a
          className="a_git"
          href="https://www.linkedin.com/in/bautista-godoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          className="a_git"
          href="https://www.github.com/baugod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="web_side"
          href="https://www.instagram.com/bolsillofeliz123/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="portafolio" />
        </a>
      </div>
      <div className="copy">
        <div className="copy-email">
          <img src={email} alt="Gmail" />
        <a href="mailto:bolsillofelizapp@gmail.com">SEND EMAIL</a>

        </div>
        <p>@{new Date().getFullYear()} BautistaGodoy. All right reserved.</p>
      </div>
    </footer>
  );
}
