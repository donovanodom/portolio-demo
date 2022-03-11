import Home from "./Home/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import Nav from "./Nav";
import About from "./About/About";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="cur-pad">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
