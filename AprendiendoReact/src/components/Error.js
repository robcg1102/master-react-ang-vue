import { Component } from "react";

class Error extends Component {
  render() {
    return (
      <section id="content">
        <h2 className="subheader">Página no encontrada</h2>
        <p>La página a la que intentas acceder no exiete en la web</p>
      </section>
    );
  }
}

export default Error;