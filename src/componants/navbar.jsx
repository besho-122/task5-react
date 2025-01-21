import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
<nav className="navbar  nav1 ">
  <div className="container-fluid container ">
    <a className="navbar-brand" href="#"> <h2 className="LOGO">BESHOLETSHO</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link class="nav-link" to ={'/'}>Home</Link>
        <Link class="nav-link" to ={'/users'}>Users</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
