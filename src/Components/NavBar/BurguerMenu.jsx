import "./BurguerMenu.css";

export default function BurguerIcon(props) {
    return(
        <div onClick={props.handleClick} 
             className={`icon nav-icon-5 ${props.clicked ? 'open': ''}`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}