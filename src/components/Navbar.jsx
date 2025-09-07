import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setVisible(true);
      return;
    }

    const controlNavbar = () => {
      // ✅ Same behavior for mobile + desktop
      if (window.scrollY === 0) {
        setVisible(true); // Show only when at the very top
      } else {
        setVisible(false); // Hide while scrolling
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ✅ Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between whitespace-nowrap">
        <div
          className="flex space-x-6 font-medium text-lg"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <Link className="text-black dark:text-white" to="/">Home</Link>
          <Link className="text-black dark:text-white" to="/skills">Skills</Link>
          <Link className="text-black dark:text-white" to="/projects">Projects</Link>
          <Link className="text-black dark:text-white" to="/journal">Journal</Link>
        </div>

        <div
          className="flex items-center space-x-6 font-medium text-lg"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <Link className="text-black dark:text-white" to="/blog">Blog</Link>
          <Link className="text-black dark:text-white" to="/resume">Resume</Link>
          <Link className="text-black dark:text-white" to="/contact">Contact</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 px-3 py-2 rounded-full transition text-black dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="sm:hidden flex flex-col items-center">
        <div
          className="flex gap-4 font-medium text-base overflow-x-auto no-scrollbar whitespace-nowrap"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <Link className="text-black dark:text-white" to="/">Home</Link>
          <Link className="text-black dark:text-white" to="/skills">Skills</Link>
          <Link className="text-black dark:text-white" to="/projects">Projects</Link>
          <Link className="text-black dark:text-white" to="/journal">Journal</Link>
          <Link className="text-black dark:text-white" to="/blog">Blog</Link>
          <Link className="text-black dark:text-white" to="/resume">Resume</Link>
          <Link className="text-black dark:text-white" to="/contact">Contact</Link>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-3 px-3 py-1 rounded-full transition text-black dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}

        </button>
        
      </div>
    </nav>
  );
}
