import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Journal from "./pages/Journal";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // ✅ Dark mode default ON
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Detect desktop vs mobile
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply dark/light mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Add page-home / page-other classes to <body>
  useEffect(() => {
    document.body.classList.remove("page-home", "page-other");
    if (location.pathname === "/") {
      document.body.classList.add("page-home");
    } else {
      document.body.classList.add("page-other");
    }
  }, [location]);

  if (loading) return <Preloader onFinish={() => setLoading(false)} />;

  // ✅ Full-screen blur for all pages except Home & Contact
  const isBlurPage = !["/", "/contact"].includes(location.pathname);

  return (
    <div className="font-serif relative min-h-screen">
      <Background />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ✅ Cursor only on desktop */}
      {isDesktop && <Cursor />}

      {/* ✅ Fullscreen blur overlay */}
      {isBlurPage && (
        <div className="fixed inset-0 backdrop-blur-lg bg-black/40 dark:bg-black/50 z-0"></div>
      )}

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.01, y: -14 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 px-5 sm:px-8 pt-24 pb-16 max-w-6xl mx-auto text-white"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
