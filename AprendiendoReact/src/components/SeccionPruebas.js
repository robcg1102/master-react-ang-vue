import { Component } from "react";
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  } */

  state = {
    contador: 0,
  };

  /* var HolaMundo = () => {} */
  HolaMundo(nombre, edad) {
    var presentacion = (
      <>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
      </>
    );

    return presentacion;
  }

  sumar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    var nombre = "Rob car";

    return (
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <p>Hola bienvenido al curso de React</p>
        <h2 className="subheader">Funciones y JSX básico</h2>
        {this.HolaMundo(nombre, 12)}
        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
          <MiComponente />
        </section>

        <h2 className="subheader">Estado</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input
            type="button"
            value="Restar"
            onClick={this.restar}
          />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
