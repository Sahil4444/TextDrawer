// import About from './components/About';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Utilbox from "./components/Utilbox";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");

  let toggleBar = () => {
    console.log("click");
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log(mode);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#151515";
      document.body.style.color = "white";
      console.log(mode);
    }
  };
  return (
    // <Router>
      <div className="App">
        <Navbar mode={mode} toggleBar={toggleBar} />
        <Utilbox mode={mode} toggleBar={toggleBar} />
        {/* <Routes> */}
          {/* <Route path="/" element={<Utilbox mode={mode} toggleBar={toggleBar} />} /> */}
          {/* <Route path="/about" element={<About mode={mode} toggleBar={toggleBar} />} /> */}
        {/* </Routes> */}
        <Footer></Footer>
      </div>
    // </Router>
  );
}

export default App;
