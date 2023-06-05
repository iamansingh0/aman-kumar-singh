import React from "react"
import Nav from "../components/Nav"
import "../css/contact.css"
import Background from "../components/Background"
import { contactLinks, contactDevSocialLinks } from "../data/data"
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiHackerrank,
    SiCodechef,
} from "react-icons/si"
import { FaCode, FaShareAltSquare } from 'react-icons/fa'
import Form from "../components/Form"
import Heading from "../components/Heading"

const Contact = ({theme}) => {
    var bgcolor = "";
    var parti_color = "";
    const col_light = "#F8F6F4"
    const col_dark = "#080402"
    if(theme === "light") {
        bgcolor = col_light
        parti_color = col_dark
    } else {
        bgcolor = col_dark
        parti_color = col_light
    }
    return (
        <div>
            <Nav />
            <Background bgcolor={bgcolor} parti_color={parti_color}/>
            <div className="contact-container">
                <div className="contact-links">
                    <Heading title="REACH OUT TO ME" />
                    <div className="link-boxes">
                        <div className="contact-upper">
                            {contactLinks.map((link) => {
                                const { id, title, data, photo } = link
                                return (
                                    <div key={id} className="link-box">
                                        <div className="icon-circle-box">
                                            <div className="icon-circle">
                                            <img src={photo} alt={title} className="c-icon"/>
                                            </div>
                                        </div>
                                        <div className="link-content-box">
                                            <h2>{title}</h2>
                                            <p>{data}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="contact-lower">
                            {contactDevSocialLinks.map((links) => {
                                const { id, title, icons } = links
                                return (
                                    <div key={id} className="link-box">
                                        <div className="icon-circle-box">
                                            <div className="icon-circle">
                                              <FaCode className="c-icon"/>
                                            </div>
                                        </div>
                                        <div className="link-content-box">
                                            <h2>{title}</h2>
                                            <div>
                                                {icons.map((i) => {
                                                    const { id, href, icon } = i
                                                    return (
                                                        <li key={id}>
                                                            <a
                                                                href={href}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <i
                                                                    className={
                                                                        icon
                                                                    }
                                                                    style={{
                                                                        color: "#4fd839",
                                                                    }}
                                                                ></i>
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="link-box">
                                <div className="icon-circle-box">
                                    <div className="icon-circle">
                                      <FaShareAltSquare className="c-icon"/>
                                    </div>
                                </div>
                                <div className="link-content-box">
                                    <h2>Dev Links</h2>
                                    <div>
                                        <li>
                                            <a
                                                href="https://leetcode.com/amankumar7355197337/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <SiLeetcode
                                                    style={{ color: "#4fd839" }}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://auth.geeksforgeeks.org/user/iamansingh/practice"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <SiGeeksforgeeks
                                                    style={{ color: "#4fd839" }}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.hackerrank.com/amankumar7355191?hr_r=1"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <SiHackerrank
                                                    style={{ color: "#4fd839" }}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.codechef.com/users/amank_123"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <SiCodechef
                                                    style={{ color: "#4fd839" }}
                                                />
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
