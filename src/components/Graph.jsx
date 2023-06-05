import React from "react"
import "../css/about.css"
import GitHubCalendar from "react-github-calendar"

const Graph = ({theme}) => {
    const themeScheme = theme === "light" ? "dark" : "light"
    return (
        <div className="graph">
            <h2 className={`graph-heading ${theme === "light" ? "secon-col" : "wh-col"}`}>
                Github <span style={{ color: "#4FD839" }}>Contribution</span>{" "}
                Graph
            </h2>
            <a
                href="https://github.com/iamansingh0"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferer"
            >
                <div className={`github-graph ${theme === "light" ? "secon-col" : "wh-col"}`}>
                    <GitHubCalendar
                        username="iamansingh0"
                        blockMargin={6}
                        blockSize={10}
                        fontSize={15}
                        colorScheme={themeScheme}
                    />
                </div>
            </a>
        </div>
    )
}

export default Graph
