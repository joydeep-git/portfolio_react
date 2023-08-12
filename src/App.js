import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./SCSS/App.scss";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App(){
  return(
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/Experience" element={<Experience/>}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}
export default App;