import React from "react";
import * as ROUTES from "./Routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
