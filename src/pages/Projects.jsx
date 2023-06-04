import React from 'react'
import Nav from '../components/Nav'
import '../css/projects.css'
import Background from '../components/Background'
import Heading from '../components/Heading'
import Project from '../components/Project'

const Projects = () => {
  return (
    <div className='projects-div'>
      <Nav />
      <Background />
      <div className="projects-container">
        <Heading title="PROJECTS"/>
        <Project />
      </div>
    </div>
  )
}

export default Projects
