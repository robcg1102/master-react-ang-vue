import { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["tomate", "queso", "jamón"],
      calorias: 400,
    };

    return (
      <div>
        <h1>{receta.nombre}</h1>
        <h2>{receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ol>
        <hr/>
        {this.props.saludo && <h3>{this.props.saludo}</h3>}
      </div>
    );
  }
}

export default MiComponente;
