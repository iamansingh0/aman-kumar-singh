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
			<button onClick={toggleTheme} className="toggle-btn">Switch</button>
			<ReactRoutes theme={theme} toggleTheme={toggleTheme} bgcolor={bgcolor} parti_color={parti_color}/>
		</div>
	)
}

export default App
