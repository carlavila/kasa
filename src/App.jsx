import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/main.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Houses from './pages/Houses/Houses';
import Error from "./pages/Error/Error"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path='/housing/:id' element={<Houses />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
