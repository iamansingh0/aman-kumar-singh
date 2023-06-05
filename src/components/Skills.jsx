import React from "react"
import { DiJava, DiJavascript1, DiReact, DiNodejs } from "react-icons/di"
import { CgCPlusPlus } from "react-icons/cg"
import { SiMysql, SiPython, SiTensorflow, SiSolidity } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import "../css/about.css"

const Skills = ({theme}) => {
    const cppColor = theme === "light" ? "#dee2e6" : "#202123";
    const jsColor = theme === "light" ? "#3cb04c" : "#2E302C";
    const solColor = theme === "light" ? "#40128B" : "1c1c1c";
    return (
        <div className="skills wh-col">
            <h1 className={`skills-heading ${theme === "light" ? "secon-col" : "wh-col"}`}>
                My <span className="gr-col">Skillset</span>
            </h1>
            <div className="skills-box">
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>C++</span>
                    <CgCPlusPlus
                        className="grid-icon"
                        style={{ color: cppColor }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>MySQL</span>
                    <SiMysql
                        className="grid-icon"
                        style={{ color: "#00618A" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>Java</span>
                    <DiJava
                        className="grid-icon"
                        style={{ color: "#DB380E" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>Python</span>
                    <SiPython
                        className="grid-icon"
                        style={{ color: "#3673A5" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>Javascript</span>
                    <DiJavascript1
                        className="grid-icon"
                        style={{ color: jsColor }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>ReactJS</span>
                    <DiReact
                        className="grid-icon"
                        style={{ color: "#61DBFB" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>NodeJS</span>
                    <DiNodejs
                        className="grid-icon"
                        style={{ color: "#90C53F" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>TensorFlow</span>
                    <SiTensorflow
                        className="grid-icon"
                        style={{ color: "#FF8201" }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>Solidity</span>
                    <SiSolidity
                        className="grid-icon"
                        style={{ color: solColor }}
                    />
                </div>
                <div className={`grid-item tooltip ${theme === "light" ? "secon-bg" : "wh-bg"}`}>
                    <span className={`tooltiptext ${theme === "light" ? "secon-col" : "wh-col"}`}>AWS</span>
                    <FaAws className="grid-icon" style={{ color: "#FC9A00" }} />
                </div>
            </div>
        </div>
    )
}

export default Skills
