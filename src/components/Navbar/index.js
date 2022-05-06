import React from 'react'
import './navbar.css'

const Header = () => {
  const logo = require("../../assets/images/logo.png")
  return (
    <>
        <nav className="navbar navbar-custom navbar-expand-sm navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand brand" href="/"><img src={logo} className="logo" alt="logo"/> dukaan</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                
                </li>
            </ul>
            <form className="d-flex">
            <a className="nav-link sign-in" href="/">Sign In</a>
            <button type="button" className="btn button-style">Dukaan for PC</button>
            </form>
            </div>
        </div>
        </nav>
      <div className='edit'>
        
      </div>
      </>
  )
}

export default Header