import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Front End Developer",
          "Blockchain Developer",
          "Coding Enthusiast",
          "Curious Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
};

export default TypeAnimation;