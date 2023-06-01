import React from "react"
import "../css/about.css"
import { VscTerminalCmd } from "react-icons/vsc"
import { AiOutlineMinus } from "react-icons/ai"
import { BiSquare } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import Typewriter from "./Typewriter"

const Terminal = () => {
    return (
        <div className="terminal">
            <h1 className="terminal-h1">About Me</h1>
            <div className="terminal-box">
                <div className="cmd">
                    <div className="header">
                        <div className="cmd-left">
                            <VscTerminalCmd style={{ color: "#c90a4d" }} />
                            <div className="cmd-prmt">Command Prompt</div>
                        </div>
                        <div className="cmd-right">
                            <div className="minus-div">
                                <AiOutlineMinus
                                    style={{ color: "white" }}
                                    className="minus"
                                />
                            </div>
                            <div className="minus-div">
                                <BiSquare
                                    style={{ color: "white" }}
                                    className="minus"
                                />
                            </div>
                            <div className="cross-div">
                                <RxCross2
                                    style={{ color: "white" }}
                                    className="cross"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="main wh-col">
                        <Typewriter />
                    </div>
                </div>
                <div className="npx-box">
                    <div className="npx-text npx-box-style">
                    👉🏻 If you have npx installed in your system, run this command in your terminal
                    </div>
                    <div className="npx npx-box-style">
                        👨🏻‍💻 npx amank
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal
