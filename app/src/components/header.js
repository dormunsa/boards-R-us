import React, {Component} from 'react'
import Section1 from './section1.js';


class Header extends Component {
    active = {
        color: "#4248FF",
        fontWeight: "bold",
        textDecoration: "none",
    }
    NotActive = {
        color: "white",
        fontWeight: "lighter",
        textDecoration: "none",
    }
    header = {
        backgroundColor: "black",
        height : "100px",
    }
    logo = {
        width: "70px",
        height : "90px",
        marginRight: 10,
        marginLeft: 20
    }
   
    render() {
        return(
<nav  style={this.header}  id="main_nav" className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href = "#">
    <img style={this.logo} src="assets/logo.png" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent1">
    <ul style={this.navLinks} className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-chart-line"></i>
         SHOP
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="far fa-clipboard"></i>
          TEAM
        </a>
      </li>
      <li  className="nav-item" >
        <a className="nav-link" href="#">
          <i className="fas fa-chart-pie"></i>
          EVENTS
        </a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" href="#" >
          <i className="fas fa-cog"></i>
          EXPIRIENCE
        </a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" href="#">
          <i className="fas fa-exclamation-triangle" ></i>
          COMPANY
        </a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" href="#" >
          <i className="fas fa-project-diagram"></i>
          <span className='align-nav'> CONTACT </span>
        </a>
      </li>
    </ul>
  
  </div>

  {/* <form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    <a className="nav-link  mob-left"  title="Cart">
    <i className="fas fa-lock"></i>
    </a> */}
</nav>
        )
    }
}

export default Header