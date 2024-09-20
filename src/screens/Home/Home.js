import React, { Component } from "react";
import Movies from "../../components/Movies/Movies";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Busqueda from "../../components/Busqueda/Busqueda";

function Home(){


        return (
            <React.Fragment>
                <Header />
                <Busqueda />
                <Link to="/masPopulares"><h2>Las mas populares</h2></Link>
                <Movies api={"https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} />
                <h2>Mejores punteadas</h2>
                <Movies api={"https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} />
                <Footer />
            </React.Fragment>

        )
    }


export default Home

