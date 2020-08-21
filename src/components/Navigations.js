import React from "react";
import {Link } from "react-router-dom"
import "./Navigations.css";

function Navigation(){
    return <span className="nav">
        <Link to="/">Home</Link>
        
        <Link to="about">About</Link>
    </span>
}


export default Navigation;
