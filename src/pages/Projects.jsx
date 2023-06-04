import React from 'react'
import Nav from '../components/Nav'
import '../css/projects.css'
import Background from '../components/Background'
import Heading from '../components/Heading'
import { projects } from '../data/data'

const Projects = () => {
  return (
    <div className='projects-div'>
      <Nav />
      <Background />
      <div className="projects-container">
        <Heading title="PROJECTS"/>
        <div className="p-boxes">
          {projects.map((project) => {
            const { id, title, img } = project
            return (
              <div className="p-box" key={id}>
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
      </div>
    </div>
  )
}

export default Projects
