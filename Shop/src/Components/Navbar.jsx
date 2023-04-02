import React from "react";
import "./Navbar.css";
 const Navbar=()=>{
    return(
        <div className="Navbar">
            <span className="nav-logo">Shopp-IT</span>
            <div className="nav-items">
                <a href='\home' >Home</a>
                <a href='\about'>About</a>
                <a href='service'>Service</a>
                <a href='contact'>Contact</a>
                 
            </div>

             
        </div>
    )
}
export default Navbar


