import React, {Component} from "react";

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: "",
        }
        
    }

    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambios(event) {
        this.setState({ valor: event.target.value},
        ()=> {
            if (this.props.filtrarPeliculas) {
                this.props.filtrarPeliculas(this.state.valor)
            } else{
                <h3>No existen películas con ese título</h3>
            }
        } )

    }
    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" placeholder="Escribir el nombre de una película" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
            </form>
        )
    }

}

export default Filtro