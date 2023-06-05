import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const RoutesLogic = ({ theme, bgcolor, parti_color }) => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Home
						theme={theme}
						bgcolor={bgcolor}
						parti_color={parti_color}
					/>
				}
			/>
			<Route
				path="/blogs"
				element={
					<Blogs
						theme={theme}
						bgcolor={bgcolor}
						parti_color={parti_color}
					/>
				}
			/>
			<Route
				path="/about"
				element={
					<About
						theme={theme}
						bgcolor={bgcolor}
						parti_color={parti_color}
					/>
				}
			/>
			<Route
				path="/contact"
				element={
					<Contact
						theme={theme}
						bgcolor={bgcolor}
						parti_color={parti_color}
					/>
				}
			/>
			<Route
				path="/projects"
				element={
					<Projects
						theme={theme}
						bgcolor={bgcolor}
						parti_color={parti_color}
					/>
				}
			/>
		</Routes>
	)
}

export default RoutesLogic
