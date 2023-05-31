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
                            <VscTerminalCmd style={{ color: "white" }} />
                            <div className="cmd-prmt">Command Prompt</div>
                        </div>
                        <div className="cmd-right">
                            <AiOutlineMinus style={{ color: "white" }} />
                            <BiSquare style={{ color: "white" }} />
                            <RxCross2 style={{ color: "white" }} />
                        </div>
                    </div>
                    <div className="main wh-col">
                        <Typewriter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal
