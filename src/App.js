import Home from "./Home/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./About/About";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="cur-pad">
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Home />
                <About />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
