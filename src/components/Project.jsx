import React, { useState } from "react"
import { projects } from "../data/data"
import "../css/projects.css"
import { RxCross2 } from "react-icons/rx"
import { AiFillStar } from "react-icons/ai"

const Project = () => {
	const [showPrompt, setShowPrompt] = useState(false)
	const [id, setId] = useState(null)

	const handleClick = (projectId) => {
		setId(projectId)
		setTimeout(() => {
			setShowPrompt(true)
		}, 50)
	}

	const handleClickBack = () => {
		setId(null)
		setShowPrompt(false)
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
			{showPrompt && (
				<div className="prompt">
					<div className="prompt-box">
						<h1 className="prompt-title">
							{projects[id - 1].title}
						</h1>
						<div className="prompt-links">
							<div className="prompt-link">
								<AiFillStar style={{ color: "#4fd839" }} />
								<p>Tech Tools :</p>
								<span>{`[ ${projects[id - 1].tech} ]`}</span>
							</div>
							<div className="prompt-link">
								<AiFillStar style={{ color: "#4fd839" }} />
								<p>
									<a href={projects[id - 1].github} target="_blank" rel="noreferer" style={{color:"#0005DC"}}>
										Github URL
									</a>
								</p>
							</div>
							<div className="prompt-link">
								<AiFillStar style={{ color: "#4fd839" }} />
								<p>
									<a href={projects[id - 1].url} target="_blank" rel="noreferer" style={{color:"#0005DC"}}>
									Deployed URL
									</a>
								</p>
							</div>
						</div>
						<div className="prompt-desc">
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
