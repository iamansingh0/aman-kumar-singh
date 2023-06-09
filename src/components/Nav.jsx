import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../css/nav.css"

const Nav = () => {
	const location = useLocation()

	return (
		<div className="navbar">
			<p className="logo">
				<Link to="/" id="name">
					AMAN
				</Link>
			</p>
			<nav className="links">
				<li className="link-li">
					<Link
						to="/"
						className={`item ${
							location.pathname === "/" ? "active" : ""
						}`}
					>
						Home
					</Link>
				</li>
				<li className="link-li">
					<Link
						to="/blogs"
						className={`item ${
							location.pathname === "/blogs" ? "active" : ""
						}`}
					>
						Blogs
					</Link>
				</li>
				<li className="link-li">
					<Link
						to="/about"
						className={`item ${
							location.pathname === "/about" ? "active" : ""
						}`}
					>
						About
					</Link>
				</li>
				<li className="link-li">
					<Link
						to="/projects"
						className={`item ${
							location.pathname === "/projects" ? "active" : ""
						}`}
					>
						Projects
					</Link>
				</li>
				<li className="link-li">
					<Link
						to="/contact"
						className={`item ${
							location.pathname === "/contact" ? "active" : ""
						}`}
					>
						Contact
					</Link>
				</li>
			</nav>
		</div>
	)
}

export default Nav
