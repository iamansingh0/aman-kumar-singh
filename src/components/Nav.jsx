import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'

const Nav = () => {
  return (
    <div className="navbar">
      <p className="logo">
        <Link to="/" id="name">AMAN</Link>
      </p>
      <nav className="links">
        <li className="link-li">
          <Link to="/" className="item">Home</Link>
        </li>
        <li className="link-li">
          <Link to="/blogs" className="item">Blogs</Link>
        </li>
        <li className="link-li">
          <Link to="/about" className="item">About</Link>
        </li>
        <li className="link-li">
          <Link to="/contact" className="item">Contact</Link>
        </li>
        <li className="link-li">
          <Link to="/projects" className="item">Projects</Link>
        </li>
      </nav>
    </div>
  )
}

export default Nav
