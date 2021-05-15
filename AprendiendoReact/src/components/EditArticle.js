import { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import swal from 'sweetalert';

class EditArticle extends Component {
  url = Global.url;
  articleId = null;

  state = {
    article: {},
    title: "",
    content: "",
    status: null,
    selectedFile: null,
  };

  componentDidMount(){
      this.articleId = this.props.match.params.id;
      this.getArticle(this.articleId);
  }

  getArticle = (id)=>{
    axios.get(this.url + 'article/' + id)
    .then(res=>{
        this.setState({
            article: res.data.article,
            title: res.data.article.title,
            content: res.data.article.content,
            selectedFile: res.data.article.image
        })
    })
  }

  saveArticle = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const content = this.state.content;

    axios.put(this.url + "article/" + this.articleId, { title, content }).then((res) => {
      if (res.data.article) {
        this.setState({
          article: res.data.article,
          status: "waiting",
        });

        swal('Artículo creado', 'El artículo ha sido creado correctamente', 'success')
        if (this.state.selectedFile !== null) {
          const articleId = this.state.article._id;

          const formData = new FormData();
          formData.append(
            "file0",
            this.state.selectedFile,
            this.state.selectedFile.name
          );

          axios
            .post(this.url + "upload-image/" + articleId, formData)
            .then((res) => {
              if (res.data.article) {
                this.setState({
                  article: res.data.article,
                  status: "success",
                });
              } else {
                this.setState({
                  article: res.data.article,
                  status: "failed",
                });
              }
            });
        } else {
          this.setState({
            status: "success",
          });
        }
      } else {
        this.setState({
          status: "failed",
        });
      }
    });
  };

  changeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  fileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  render() {
    if (this.state.status === "success") {
      return <Redirect to="/blog" />;
    }
    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Editar artículo</h1>
          <form action="" className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.changeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                value={this.state.content}
                onChange={this.changeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file0">Contenido</label>
              <input type="file" name="file0" onChange={this.fileChange} value={this.state.selectedFile}/>
              {this.state.article.image !== null ? (
                  <img
                    src={this.url + "get-image/" + this.state.article.image}
                    alt={this.state.article.title}
                    style={{width: '150px'}}
                  />
                ) : (
                  <img
                    src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                    alt={this.state.article.title}
                    style={{width: '150px'}}
                  />
                )}
            </div>
            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>
        </section>
        <Sidebar />
      </div>
    );
  }
}

export default EditArticle;
