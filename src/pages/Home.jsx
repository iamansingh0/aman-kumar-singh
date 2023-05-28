import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>This is home</h2>
      <Link to="/blogs">Blogs</Link>
    </div>
  )
}

export default Home
