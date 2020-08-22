import React from "react";
import {Link } from "react-router-dom"
import "./Navigations.css";

function Navigation(){
    return <span className="nav">
        <Link to="/" className="pageBtn">Home</Link>
        <Link to="Explanation" className="pageBtn"> 서비스 소개 </Link>
        <Link to="AboutTeam" className="pageBtn"> 제작자들 </Link>
        <Link to="Ask" className="pageBtn"> 문의사항 </Link>
    </span>
}


export default Navigation;
