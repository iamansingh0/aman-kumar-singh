import React from "react"
import Nav from "../components/Nav"
import { blogs } from "../data/data"
import "../css/blogs.css"
import Background from "../components/Background"
import { FaBookOpen } from "react-icons/fa"
import Heading from "../components/Heading"

const Blogs = ({theme, bgcolor, parti_color}) => {
    
    return (
        <div className="blogs-div">
            <Nav />
            <Background bgcolor={bgcolor} parti_color={parti_color}/>
            <div className="blogs-container">
                <Heading title="ALL ARTICLES" theme={theme}/>
                {blogs.map((blog) => {
                    const { title, image, date, time, brief, link, id } = blog
                    return (
                        <section key={id}>
                            <a href={link} target="_blank" rel="noreferer">
                                <article className="blog">
                                    <div className="text-left">
                                        <div className={`title ${theme === "light" ? "secon-col" : "wh-col"}`}>{title}</div>
                                        <div className="detail">
                                            <p className="date">{date}</p>
                                            <div className="time-icon">
                                                <FaBookOpen className="book-icon" />
                                                <p className="time">{time}</p>
                                            </div>
                                        </div>
                                        <div className={`brief ${theme === "light" ? "secon-col" : "wh-col"}`}>{brief}</div>
                                    </div>
                                    <div className="img-right">
                                        <div className="img">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                </article>
                            </a>
                            <hr className={`hr-line ${theme === "light" ? "secon-bg" : "wh-bg"}`} />
                        </section>
                    )
                })}
            </div>
            <div className="buffer"></div>
        </div>
    )
}

export default Blogs
