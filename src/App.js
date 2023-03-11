import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import "./CSS/App.css";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Roadmap from "./Pages/Roadmap";
import Navbar from "./Components/Navbar";

function App(){
  return(
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/roadmap" element={<Roadmap/>}></Route>
        </Routes>
      </Router>



    </div>
  )
}
export default App;