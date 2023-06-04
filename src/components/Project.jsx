import React, { useState } from "react"
import { projects } from "../data/data"
import "../css/projects.css"
import { RxCross2 } from "react-icons/rx"

const Project = () => {
	const [id, setId] = useState(null)

	const handleClick = (projectId) => {
		setId(projectId)
	}

	const handleClickBack = () => {
		setId(null)
	}

	return (
		<div className="wrapper">
			<div className={`p-boxes ${id ? "prompt-open" : ""}`}>
				{projects.map((project) => {
					const { id, title, img } = project
					return (
						<div
							className="p-box"
							key={id}
							onClick={() => handleClick(id)}
						>
							<div className="p-img-div">
								<img src={img} alt={title} />
							</div>
							<div className="p-text-div">
								<h4>{title}</h4>
							</div>
						</div>
					)
				})}
			</div>
			{id && (
				<div className="prompt">
					<div className="prompt-box">
						<h1 className="prompt-title">
							{projects[id - 1].title}
						</h1>
						<div className="prompt-content">
							<p>{projects[id - 1].tech}</p>
							<p>{projects[id - 1].url}</p>
							<p>{projects[id - 1].desc}</p>
						</div>
					</div>

					<button onClick={handleClickBack} className="prompt-btn">
						<RxCross2 />
					</button>
				</div>
			)}
		</div>
	)
}

export default Project
