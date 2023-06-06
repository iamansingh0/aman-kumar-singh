import React from "react"
import Nav from "../components/Nav"
import "../css/projects.css"
import Background from "../components/Background"
import Heading from "../components/Heading"
import Project from "../components/Project"

const Projects = ({ theme, bgcolor, parti_color }) => {

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
