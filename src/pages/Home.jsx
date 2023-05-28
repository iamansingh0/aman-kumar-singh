import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'

const Home = () => {
  return (
    <div>
      <Background />
      <h2>This is home</h2>
      <Link to="/blogs">Blogs</Link>
    </div>
  )
}

export default Home
