import React ,{ Component } from "react";

class Busqueda extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" placeholder="Escribir el nombre de una película"/>

            </form>
        )
    }

    }



export default Busqueda