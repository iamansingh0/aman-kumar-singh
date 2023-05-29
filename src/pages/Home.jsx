import React from "react"
import { Link } from "react-router-dom"
import Background from "../components/Background"
import TypeAnimation from "../components/TypeAnimation"
import "../css/home.css"
import photo from "../img/bg2.png"
import { socialLinks } from "../data/data"

const Home = () => {
    return (
        <section className="home-section">
            <Background />
            <div className="page-content">
                <div className="text-part">
                    <div className="text">
                        <div className="name wh-col">Aman Kumar Singh</div>
                        <div className="animated-text">
                            <p className="textbea wh-col">I am</p>
                            <p className="typeanimation">
                                <TypeAnimation />
                            </p>
                        </div>
                        <div className="links-btn">
                            <div className="social-links-home">
                                {socialLinks.map((link) => {
                                    const { id, href, icon } = link
                                    return (
                                        <li key={id}>
                                            <a href={href} 
                                                target="_blank"
                                                rel="noreferer">
                                                <i
                                                    className={icon}
                                                    style={{ color: "#4FD839" }}
                                                ></i>
                                            </a>
                                        </li>
                                    )
                                })}
                            </div>
                            <button className="btn">
                                <Link to='about' className="btn-link">Explore</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="img-part">
                    <img
                        src={photo}
                        alt="there should be a photo"
                        className="img"
                    />
                </div>
            </div>
            <div className="page-footer">
                {/* <Link to="/blogs">Blogs</Link> */}
            </div>
        </section>
    )
}

export default Home
