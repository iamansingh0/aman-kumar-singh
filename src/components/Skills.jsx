import React from "react"
import { DiJava, DiJavascript1, DiReact, DiNodejs } from "react-icons/di"
import { CgCPlusPlus } from "react-icons/cg"
import { SiMysql, SiPython, SiTensorflow, SiSolidity } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import "../css/about.css"

const Skills = () => {
    return (
        <div className="skills wh-col">
            <h1 className="skills-heading">
                My <span className="gr-col">Skillset</span>
            </h1>
            <div className="skills-box">
                <div className="grid-item tooltip">
                    <span class="tooltiptext">C++</span>
                    <CgCPlusPlus
                        className="grid-icon"
                        style={{ color: "black" }}
                    />
                </div>
                <div className="grid-item tooltip">
                <span class="tooltiptext">MySQL</span>
                    <SiMysql
                        className="grid-icon"
                        style={{ color: "#00618A" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">Java</span>
                    <DiJava
                        className="grid-icon"
                        style={{ color: "#DB380E" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">Python</span>
                    <SiPython
                        className="grid-icon"
                        style={{ color: "#3673A5" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">Javascript</span>
                    <DiJavascript1
                        className="grid-icon"
                        style={{ color: "#2E302C" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">ReactJS</span>
                    <DiReact
                        className="grid-icon"
                        style={{ color: "#61DBFB" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">NodeJS</span>
                    <DiNodejs
                        className="grid-icon"
                        style={{ color: "#90C53F" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">TensorFlow</span>
                    <SiTensorflow
                        className="grid-icon"
                        style={{ color: "#FF8201" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">Solidity</span>
                    <SiSolidity
                        className="grid-icon"
                        style={{ color: "#1C1C1C" }}
                    />
                </div>
                <div className="grid-item tooltip">
                    <span class="tooltiptext">AWS</span>
                    <FaAws className="grid-icon" style={{ color: "#FC9A00" }} />
                </div>
            </div>
        </div>
    )
}

export default Skills
