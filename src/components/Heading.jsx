import React from 'react'
import '../css/heading.css'

const Heading = ({title, theme}) => {
  return (
    <div className='heading'>
      <h4 className={`title-h4 ${theme === "light" ? "secon-col" : "wh-col"}`}>{title}</h4>
      <div className="line"></div>
    </div>
  )
}

export default Heading
