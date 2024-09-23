import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css"

function Header() {
    return(
        <React.Fragment>
            <header className="header">
            <img src="/imgs/cinemania.png" className="logo"/>
            <nav>
                <ul className="subtitulos">
                    <li> <Link to="/" exact={true}>Home</Link></li>
                    <li><Link to="/favorites">Películas favoritas</Link></li>
                    <li><Link to="/populars">Más populares</Link></li>
                    <li><Link to="/topRated">Mejores puntuadas</Link></li>
                </ul>
            </nav>
            </header>
        </React.Fragment>
    )
}

export default Header