import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Welcome from "./components/welcome";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;
