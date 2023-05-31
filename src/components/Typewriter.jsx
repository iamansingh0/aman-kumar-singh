import React, { useEffect, useState } from 'react';
import "../css/type.css"

const Typewriter = () => {
  const [lines, setLines] = useState([]);
  const textLines = [
    "> Hello!",
    "> My name is Aman, I am 21 years old.",
    "> I am an engineering student.",
    "> I am majoring in Computer Engineering at VIT Chennai.",
    "> I love coding and challenges.",
    "> If you want to know more about me, you are in the right place."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lines.length < textLines.length) {
        setLines((prevLines) => [...prevLines, textLines[prevLines.length]]);
      }
    }, 1000); // Adjust the delay (in milliseconds) between lines here

    return () => clearTimeout(timer);
  }, [lines]);

  return (
    <div className='cmd-text'>
      {lines.map((line, index) => (
        <p key={index} style={{fontFamily:"cursive"}}>{line}</p>
      ))}
    </div>
  );
};

export default Typewriter;
