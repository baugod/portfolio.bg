import React, {useState} from "react"
import "./NavBar.css"
import BurguerIcon from "../NavBar/BurguerMenu";

export default function NavBar(){

    const [clicked, setClicked] = useState(false)
    const handleClick = () => { setClicked(!clicked) }
    return (
        <>
        <nav className="menu">
            <label className="logo">Bautista Godoy</label>
            <ul className={`menu_items ${clicked ? 'show' : ''}`}>
                <li><a href="/">Home</a></li> 
                <li><a href="/about">About</a></li>
                <li><a href="/proyects">Proyects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="bt_menu">
            <BurguerIcon clicked={clicked} handleClick={handleClick}/>
            </div>
        </nav>
        </>
    )
}
