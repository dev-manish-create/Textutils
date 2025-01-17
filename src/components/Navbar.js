import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        // <nav className="navbar bg-dark  navbar-expand-lg" data-bs-theme="dark"  >
        <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href= "www.google.com">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to= "/">Home</Link>
       </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        </ul>
      
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch"  onClick={props.Mode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
  </div>
</nav>
    )
}

