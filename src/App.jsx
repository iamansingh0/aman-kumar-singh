import ReactRoutes from "./ReactRoutes"
import { useState } from "react"
import './index.css'

function App() {
	
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
	}
	var bgcolor = "";
    var parti_color = "";
    const col_light = "#c4e5c9"
    const col_dark = "#080402"
    if(theme === "light") {
        bgcolor = col_light
        parti_color = col_dark
    } else {
        bgcolor = col_dark
        parti_color = col_light
    }
	return (
		<div className={`App ${theme}`}>
			<button onClick={toggleTheme} className={`toggle-btn ${theme==="light"?"prim-bg-light secon-col p-bs-light":"prim-bg wh-col p-bs-black"}`}>
				<i className={`toggle-icon ${theme==="light"?"fas fa-toggle-off":"fas fa-toggle-on"}`}></i>
			</button>
			<ReactRoutes theme={theme} toggleTheme={toggleTheme} bgcolor={bgcolor} parti_color={parti_color}/>
		</div>
	)
}

export default App
