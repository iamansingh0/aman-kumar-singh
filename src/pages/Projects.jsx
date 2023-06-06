import React from "react"
import Nav from "../components/Nav"
import "../css/projects.css"
import Background from "../components/Background"
import Heading from "../components/Heading"
import Project from "../components/Project"

const Projects = ({ theme }) => {
	var bgcolor = ""
	var parti_color = ""
	const col_light = "#c4e5c9"
	const col_dark = "#080402"
	if (theme === "light") {
		bgcolor = col_light
		parti_color = col_dark
	} else {
		bgcolor = col_dark
		parti_color = col_light
	}
	return (
		<div className="projects-div">
			<Nav />
			<Background bgcolor={bgcolor} parti_color={parti_color} />
			<div className="projects-container">
				<Heading title="PROJECTS" theme={theme} />
				<Project theme={theme}/>
			</div>
		</div>
	)
}

export default Projects
