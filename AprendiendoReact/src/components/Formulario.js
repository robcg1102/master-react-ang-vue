import { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  state = {
    nombre: "",
    apellidos: "",
    bio: "",
    genero: "hombre",
  };

  changeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h2 className="subheader">Formulario</h2>
            <form className="mid-form" onSubmit={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.changeInput}
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  name="apellidos"
                  value={this.state.apellidos}
                  onChange={this.changeInput}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  name="bio"
                  onChange={this.changeInput}
                  value={this.state.bio}
                ></textarea>
              </div>

              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  onChange={this.changeInput}
                  defaultChecked
                />
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  onChange={this.changeInput}
                />
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  onChange={this.changeInput}
                />
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>

          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Formulario;
