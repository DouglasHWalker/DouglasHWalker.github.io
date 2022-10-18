import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectPage from "./pages/ProjectPage";
import PortfolioListPage from "./pages/PortfolioListPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div id="page-body">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/project/:name" element={<ProjectPage />} />
          <Route path="/portfolio" element={<PortfolioListPage />} />
          <Route path="/portfolio/:name" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
