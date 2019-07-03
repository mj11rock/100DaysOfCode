import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import About from "./components/about";
import Projects from "./components/projects";
import Contacts from "./components/contacts";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 300
});

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
