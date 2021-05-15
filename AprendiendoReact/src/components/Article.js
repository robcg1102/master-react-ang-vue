import { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import Moment from "react-moment";
import "moment/locale/es";
import swal from "sweetalert";

class Article extends Component {
  url = Global.url;

  state = {
    article: false,
    status: null,
  };

  componentDidMount() {
    const idArticle = this.props.match.params.id;
    axios.get(this.url + "article/" + idArticle).then((resp) => {
      this.setState({
        article: resp.data.article,
        status: "success",
      });
    });
  }

  deleteArticle = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar tu artículo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(this.url + "article/" + id).then((res) => {
          this.setState({
            article: res.data.article,
            status: "deleted",
          });
          swal(
            "Artículo eliminado",
            "El artículo ha sido eliminado con éxito",
            "success"
          );
        });
      } else {
        swal("Tu archivo no se ha eliminado");
      }
    });
  };
  render() {
    if (this.state.status === "deleted") {
      return <Redirect to="/blog" />;
    }

    return (
      <div className="center">
        <section id="content">
          {this.state.article && (
            <article className="article-item article-detail">
              <div className="image-wrap">
                {this.state.article.image !== null ? (
                  <img
                    src={this.url + "get-image/" + this.state.article.image}
                    alt={this.state.article.title}
                  />
                ) : (
                  <img
                    src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                    alt={this.state.article.title}
                  />
                )}
              </div>

              <h1 className="subheader">{this.state.article.title}</h1>
              <span className="date">
                <Moment fromNow>{this.state.article.date}</Moment>
              </span>
              <p>{this.state.article.content}</p>

              <Link
                to={"/blog/editar/" + this.state.article._id}
                className="btn btn-warning"
              >
                Editar
              </Link>

              <button
                onClick={() => {
                  this.deleteArticle(this.state.article._id);
                }}
                className="btn btn-danger"
              >
                Eliminar
              </button>
              <div className="clearfix"></div>
            </article>
          )}
          {!this.state.status && this.state.article && (
            <h2 id="article-item article-detail">Cargando...</h2>
          )}
          {!this.state.article && (
            <div id="article">
              <h2 className="subheader">El artículo no existe</h2>
              <p>Inténtalo de nuevo más tarde</p>
            </div>
          )}
        </section>
        <Sidebar />
      </div>
    );
  }
}

export default Article;
