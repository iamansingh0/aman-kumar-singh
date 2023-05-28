import React from 'react'
import Nav from '../components/Nav'
import { blogs } from '../data/data'
import '../css/blogs.css'
import Background from '../components/Background'

const Blogs = () => {
  return (
    <div className="blogs-div">
      <Nav />
      <Background />
      <div className="blogs-container">
        <div className="article-text-div">
          <h4 className="article">ALL ARTICLES</h4>
          <div className="line"></div>
        </div>
        {blogs.map((blog) => {
          const { id, title, image, date, time, brief } = blog;
          return (
            <article key={id} className="blog">
              <h2 className="title"> </h2>

              {/* <hr style={{ color: "white", width: "3px" }} /> */}
            </article>
          );
        })}
      </div>
      <div className="buffer"></div>
    </div>
  );
};

export default Blogs;

