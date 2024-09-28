import React, { Component } from "react";
import Movies from "../../components/Movies/Movies";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Busqueda from "../../components/Busqueda/Busqueda";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css"

function Home() {


    return (
        <React.Fragment>
            <Header />
            <Busqueda />
            <h2 className="titulo">Las mas populares</h2>
            <Movies api={"https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} />
            <Link to="/populars"><button className="boton">Ver todas</button></Link>
            <h2 className="titulo">Mejores punteadas</h2>
            <Movies api={"https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} />
            <Link to="/topRated"><button className="boton">Ver todas</button></Link>
            <Footer />
        </React.Fragment>

    )
}


export default Home

