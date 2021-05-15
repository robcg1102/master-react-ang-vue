import { Component } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Articles from './Articles';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider
          title="Bienvenido al Curso de React"
          btn="Ir al blog"
          size="slider-big"
        />
        <div className="center">
          <div id="content">
            <h1 className="subheader">Últimos artículos</h1>
            <Articles
              home="true"
            />
          </div>

          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Home;
