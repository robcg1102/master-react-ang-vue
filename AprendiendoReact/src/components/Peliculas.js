import { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    // var random = Math.floor(Math.random() * 3);
    var { peliculas } = this.state; /* 
    alert(random) */
    peliculas[0].titulo = "Batman Beggins";

    this.setState({
      peliculas,
    });
  };

  favorita = (pelicula) => {
    console.log("Favorita marcada");
    this.setState({
      favorita: pelicula.titulo,
    });
  };

  componentWillMount() {
    this.setState({
      peliculas: [
        {
          titulo: "Batman vs Superman",
          image:
            "http://im.rediff.com/movies/2016/mar/24batman-vs-superman.jpg",
        },
        {
          titulo: "Gran Torino",
          image:
            "http://1.bp.blogspot.com/-VQxMKU94gW4/TqW7XscGtXI/AAAAAAAAAC4/NohKoMY_KX8/s1600/gran-torino-movie-01+%25281%2529.jpg",
        },
        {
          titulo: "Looper",
          image:
            "https://sleeplessthought.files.wordpress.com/2014/09/looper01.jpg",
        },
      ],
      nombre: "Rob CarGas",
      favorita: "",
    });
  }

  componentDidMount() {
    console.log("Ya se ha montado el componente");
  }

  componentDidUpdate() {
    console.log("Se actualizó");
  }

  render() {
    var favorita;
    if (this.state.favorita) {
      favorita = (
        <p
          className="favorita"
          style={{ background: "green", color: "white", padding: "10px" }}
        >
          <strong>La película favorita es: </strong>
          <span>{this.state.favorita}</span>
        </p>
      );
    } else {
      <p style={{ background: "grey", color: "black", padding: "10px" }}>
        No hay película favorita
      </p>;
    }

    return (
      <>
        <Slider title="Formulario" size="slider-small" />
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="suheader">Listado de películas</h2>
            <p>Selección de las películas favoritas de: {this.state.nombre}</p>
            <p>
              <button onClick={this.cambiarTitulo}>Cambiar</button>
            </p>
            {/* {this.state.favorita ? (
          <p
            className="favorita"
            style={{ background: "green", color: "white", padding: "10px" }}
          >
            <strong>La película favorita es: </strong>
            <span>{this.state.favorita}</span>
          </p>
        ) : (
          <p style={{ background: "grey", color: "black", padding: "10px" }}>
            No hay película favorita
          </p>
        )} */}
            {favorita}
            <div className="articles">
              {this.state.peliculas.map((pelicula, index) => (
                <Pelicula
                  pelicula={pelicula}
                  key={index}
                  marcarFavorita={this.favorita}
                />
              ))}
            </div>
          </div>
          <Sidebar blog="false" />
        </div>
      </>
    );
  }
}

export default Peliculas;
