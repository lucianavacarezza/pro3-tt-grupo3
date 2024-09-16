import React from "react";
import Movies from "../../components/Movies/Movies";

function Home() {
    return(
    <React.Fragment>
        <p>Home</p>
        <h2>Las mas populares</h2>
        <Movies api={"https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"}/> 
        <h2>Mejores punteadas</h2>   
        <Movies api={"https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0"}/>   
    </React.Fragment>
        
    )
}

export default Home

