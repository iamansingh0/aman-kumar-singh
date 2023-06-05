import React, { useState } from "react"
import { Link } from "react-router-dom"
import Background from "../components/Background"
import TypeAnimation from "../components/TypeAnimation"
import "../css/home.css"
import photo from "../img/bg2.png"
import { socialLinks } from "../data/data"

const Home = ({theme}) => {
	// console.log(theme)
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
		<section className="home-section">
            <Background bgcolor={bgcolor} parti_color={parti_color}/>
			<div className="page-content">
				<div className="text-part">
					<div className="text">
						<div className="name wh-col">Aman Kumar Singh</div>
						<div className="animated-text">
							<p className="textbea wh-col">I am</p>
							<div className="typeanimation">
								<TypeAnimation />
							</div>
						</div>
						<div className="links-btn">
							<div className="social-links-home">
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
							<button className="btn">
								<Link to="about" className="btn-link">
									Explore
								</Link>
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
