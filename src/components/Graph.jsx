import React from "react"
import "../css/about.css"
import GitHubCalendar from "react-github-calendar"

const Graph = () => {
    return (
        <div className="graph">
            <h2 className="wh-col graph-heading">
                Github <span style={{ color: "#4FD839" }}>Contribution</span>{" "}
                Graph
            </h2>
            <a
                href="https://github.com/iamansingh0"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferer"
            >
                <div className="github-graph wh-col">
                    <GitHubCalendar
                        username="iamansingh0"
                        blockMargin={6}
                        blockSize={10}
                        fontSize={15}
                        color={"#32CD30"}
                        colorScheme="light"
                    />
                </div>
            </a>
        </div>
    )
}

export default Graph
