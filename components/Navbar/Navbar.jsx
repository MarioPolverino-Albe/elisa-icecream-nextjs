"use client"

import React from "react";
import './Navbar.css'

function Navbar(){

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
  

    return(
    <nav className="navbar">
        <div className="navbar-container container">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Our story</a></li>
                <li><a href="/auth-gelato">Authentic gelato</a></li>
                <li><a href="/flavours">Traditional flavours</a></li>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
            <div className="logo"> <img src="Elisa_Orizzontale_White.png" alt="Elisa Gelato logo"/> </div>
        </div>
    </nav>
    )
}

export default Navbar;