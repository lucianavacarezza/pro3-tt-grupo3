import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return(
        <React.Fragment>
            <img src="/imgs/cinemania.png"/>
            <nav>
                <ul className="">
                    <li> <Link to="/" exact={true}>Home</Link></li>
                    <li><Link to="/favorites">Favoritos</Link></li>
                    <li><Link to="/masPopulares">Más populares</Link></li>
                    <li><Link to="/mejorPuntuadas">Mejores puntuadas</Link></li>
                    <li><Link to="/favorites">Tus peliculas favoritas</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header