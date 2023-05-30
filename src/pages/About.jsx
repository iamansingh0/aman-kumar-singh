import React from "react"
import "../css/about.css"
import Background from "../components/Background"
import avatar from "../img/avatar.jpeg"
import { socialLinks } from "../data/data"
import { useNavigate } from "react-router-dom"
const cvURL =
    "https://drive.google.com/drive/folders/11nHzAexTsBIU5YX-j8HC2HfuhY4XISz6?usp=sharing"
import Graph from "../components/Graph"


const About = () => {
    const navigate = useNavigate()
    return (
        <div className="about-container">
            <Background />
            <div className="upper">
                <div className="left-panel">
                    <div className="avatar-name">
                        <div className="about-line"></div>
                        <img src={avatar} alt="" className="avatar" />
                        <p className="about-name wh-col">Aman Kumar Singh</p>
                        <div className="hr-about"></div>
                    </div>
                    <div className="about-links">
                        <div className="about-social-links">
                            {socialLinks.map((link) => {
                                const { id, href, icon } = link
                                return (
                                    <li key={id}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferer"
                                        >
                                            <i
                                                className={icon}
                                                style={{ color: "#4FD839" }}
                                            ></i>
                                        </a>
                                    </li>
                                )
                            })}
                        </div>
                        <div className="about-page-links">
                            <button onClick={() => navigate("/")}>Home</button>
                            <button onClick={() => navigate("/blogs")}>
                                Blogs
                            </button>
                            <button onClick={() => navigate("/projects")}>
                                Projects
                            </button>
                            <button onClick={() => navigate("/contact")}>
                                Contact
                            </button>
                        </div>
                        <div className="cv-btn">
                            <button>
                                <a href={cvURL} target="_blank" rel="noreferer">
                                    <i className="fa fa-download res-icon"></i>
                                    <span className="res-text">Resume</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right-panel"></div>
            </div>
            <div className="lower">
                <Graph />
            </div>
        </div>
    )
}

export default About
