import Home from "./Home/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import Nav from "./Nav";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="cur-pad">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
