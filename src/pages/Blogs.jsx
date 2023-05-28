import React from "react"
import Nav from "../components/Nav"
import { blogs } from "../data/data"
import "../css/blogs.css"
import Background from "../components/Background"

const Blogs = () => {
    const { image } = blogs[0]
    return (
        <div className="blogs-div">
            <Nav />
            <Background />
            <div className="blogs-container">
                <div className="article-text-div">
                    <h4 className="article">ALL ARTICLES</h4>
                    <div className="line"></div>
                </div>
                <article className="blog">
                    <div className="text-left"></div>
                    <div className="img-right">
                        <div className="img">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </article>
            </div>
            <div className="buffer"></div>
        </div>
    )
}

export default Blogs
