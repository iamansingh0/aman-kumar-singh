import React from "react"
import Nav from "../components/Nav"
import "../css/contact.css"
import Background from "../components/Background"

const Contact = () => {
    return (
        <div>
            <Nav />
            <Background />
            <div className="contact-container">
                <div className="contact-links">
                    <div className="contact-heading">
                        <div className="heading-text wh-col">REACH OUT TO ME</div>
                        <div className="heading-line"></div>
                    </div>
                    <div className="link-boxes">
                        <div className="link-box"></div>
                        <div className="link-box"></div>
                        <div className="link-box"></div>
                        <div className="link-box"></div>
                    </div>
                </div>
                <div className="contact-form"></div>
            </div>
        </div>
    )
}

export default Contact
