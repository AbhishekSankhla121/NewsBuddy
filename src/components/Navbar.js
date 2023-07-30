import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className={`navbar fixed-top navbar-expand-lg border border-dark navbar-${this.props.ModeName} bg-${this.props.ModeName} `}>
  <div className="container-fluid ">
    
    <div className="navbar-brand  " ><strong>News Buddy</strong></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/home">Home</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/technology">Technology</Link></li>
        </ul>
        <button type="button" onClick={this.props.Mode} className={`btn btn-${this.props.ModeName=="light"?"danger":"light"} text-${this.props.ModeName=="light"?"white":"black"}` }><strong>{`${this.props.ModeText}`}</strong></button>
    </div>
  </div>
</nav>
      </>
    )
  }
}

export default Navbar
