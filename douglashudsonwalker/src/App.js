import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectPage from "./pages/ProjectPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/project/:name" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
