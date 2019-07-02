import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Welcome from "./components/welcome";
import About from "./components/about";
import Projects from "./components/projects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Projects />
    </div>
  );
}

export default App;
