import { Component } from "react";
import { Redirect, Link } from 'react-router-dom'

class Sidebar extends Component {
  state = {
    search: '',
    redirect: false,
  }
  redirectToSearch = (e)=>{
    e.preventDefault()
   this.setState({
     redirect: true
   })
  }
  changeSearch = (e) =>{
    const { name, value} = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    if(this.state.redirect){
      return <Redirect to={"/redirect/"+this.state.search}/>
    }else{
      return (
      <aside id="sidebar">
        {this.props.blog === "true" && <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <Link to={"/blog/crear"} className="btn btn-success">
            Crear artículo
          </Link>
        </div>}
        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form onSubmit={this.redirectToSearch}>
            <input type="text" name="search" placeholder="Artículo a buscar" value={this.state.search} onChange={this.changeSearch}/>
            <input
              type="submit"
              name="submit"
              value="Buscar"
              className="btn"
            />
          </form>
        </div>
      </aside>
    );
    }
    
  }
}

export default Sidebar;
