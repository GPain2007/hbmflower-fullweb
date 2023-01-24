import React, { useState } from "react";
import * as ROUTES from "./Routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Nav show={show} setShow={setShow} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home show={show} />} />
        <Route path={ROUTES.ABOUT} element={<About show={show} />} />
        <Route path={ROUTES.CONTACT} element={<Contact show={show} />} />
        <Route path={ROUTES.GALLERY} element={<Gallery show={show} />} />
      </Routes>
    </Router>
  );
}

export default App;
