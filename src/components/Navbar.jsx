import React, { Component } from 'react';
import "./style.css";
import navimg from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={navimg} className="nav--logo" />
        </nav>
    )
}