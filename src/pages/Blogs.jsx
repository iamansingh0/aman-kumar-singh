import React from "react"
import Nav from "../components/Nav"
import { blogs } from "../data/data"
import "../css/blogs.css"
import Background from "../components/Background"
import { FaBookOpen } from "react-icons/fa"
import Heading from "../components/Heading"

const Blogs = () => {
    
    return (
        <div className="blogs-div">
            <Nav />
            <Background />
            <div className="blogs-container">
                <Heading title="ALL ARTICLES"/>
                {blogs.map((blog) => {
                    const { title, image, date, time, brief, link, id } = blog
                    return (
                        <section key={id}>
                            <a href={link} target="_blank" rel="noreferer">
                                <article className="blog">
                                    <div className="text-left">
                                        <div className="title">{title}</div>
                                        <div className="detail">
                                            <p className="date">{date}</p>
                                            <div className="time-icon">
                                                <FaBookOpen className="book-icon" />
                                                <p className="time">{time}</p>
                                            </div>
                                        </div>
                                        <div className="brief">{brief}</div>
                                    </div>
                                    <div className="img-right">
                                        <div className="img">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                </article>
                            </a>
                            <hr className="hr-line" />
                        </section>
                    )
                })}
            </div>
            <div className="buffer"></div>
        </div>
    )
}

export default Blogs
