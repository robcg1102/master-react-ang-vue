import { Component } from "react";

class Pelicula extends Component {


  marcar = () =>{
    this.props.marcarFavorita(this.props.pelicula)
  }

  render() {
    const { titulo, image } = this.props.pelicula;

    return (
      <article className="article-item" id="article-template" key={this.props.index}> 
        <div className="image-wrap">
          <img src={image} alt={titulo} />
        </div>

        <h2>{titulo}</h2>
        <span className="date">Hace 5 minutos</span>
        <a href="...">Leer más</a>

        <button onClick={this.marcar}>
          Favorita
        </button>
        <div className="clearfix"></div>
      </article>
    );
  }
}

export default Pelicula;
