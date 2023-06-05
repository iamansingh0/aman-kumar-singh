import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const RoutesLogic = ({ theme, toggleTheme }) => {
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} />} />
      <Route path="/blogs" element={<Blogs theme={theme} />} />
      <Route path="/about" element={<About theme={theme} />} />
      <Route path="/contact" element={<Contact theme={theme} />} />
      <Route path="/projects" element={<Projects theme={theme} />} />
    </Routes>
  );
};

export default RoutesLogic;
