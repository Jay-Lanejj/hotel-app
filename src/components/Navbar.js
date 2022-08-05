import '../styles/Navbar.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Link} from "react-router-dom"
import Logo from "../images/hotel logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <div className="leftside">
                <img src={Logo} />
            </div>

            <div className="righttside">
                <Link to="/sign-up">sign-up</Link>
            </div>
        </div>
    )
}
export default Navbar