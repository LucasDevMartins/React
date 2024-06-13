import React from 'react'

import logoimg from '../../acts/imagens/logo.png';

import "./styles.css"

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <img src={logoimg} alt="" />
                <div className="nav-brand">
            
                    <h1 className="grenze-regular">Space Flight News</h1>
                </div>

                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Tranding</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">About us</a></li>
                    </ul>
                </nav>
        </header>
        )
    };
}
