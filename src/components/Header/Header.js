import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return(
        <React.Fragment>
            <img src="/imgs/cinemania.png"/>
            <nav>
                <ul className="">
                    <li> <Link to="/" exact={true}>Home</Link></li>
                    <li><Link to="/favorites">Películas favoritas</Link></li>
                    <li><Link to="/populars">Más populares</Link></li>
                    <li><Link to="/topRated">Mejores puntuadas</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header