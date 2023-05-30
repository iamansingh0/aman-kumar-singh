import React from "react"
import "../css/about.css"
import Background from "../components/Background"
import avatar from "../img/avatar.jpeg"
import { socialLinks } from "../data/data"

const About = () => {
    return (
        <div className="about-container">
            <Background />
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
                </div>
            </div>
            <div className="right-panel"></div>
        </div>
    )
}

export default About
