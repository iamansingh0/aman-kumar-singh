import ReactRoutes from "./ReactRoutes"
import { useState } from "react"
import './index.css'

function App() {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
	}
	return (
		<div className={`App ${theme}`}>
			<button onClick={toggleTheme} className="toggle-btn">Switch</button>
			<ReactRoutes theme={theme} toggleTheme={toggleTheme}/>
		</div>
	)
}

export default App
