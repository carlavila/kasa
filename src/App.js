import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/style/main.scss';
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Home />}></Route>
     <Route exact path="/about" element={<About />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
