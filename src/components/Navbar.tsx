import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, Moon, Sun, X} from "lucide-react";
import {Button} from "react-bootstrap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [isDarkMode, changeTheme] = useState(false);

  const handleThemeChange = (newDarkMode: boolean) => {
    changeTheme(newDarkMode);

    document.documentElement.classList.toggle("dark", newDarkMode);
    document.documentElement.setAttribute("data-bs-theme", newDarkMode ? "dark" : "light");
    localStorage.theme = newDarkMode ? "dark" : "light";
  };

  if (!rendered) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    handleThemeChange(isDark);
    setRendered(true);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/management", label: "Management" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-black/60 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/banner/CIA_LOGO.png"
              alt="CIA Logo"
              width={35}
              height={35}
            />
            <span className="text-xl font-bold gradient-text">CIA</span>
          </NavLink>
          <div className="flex space-x-8 relative hidden md:flex items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-rose-500/60 transition-colors ${
                    isActive ? "text-red-400" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join-us"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                }`
              }
            >
              Join Us
            </NavLink>
            <Button
                className="flex items-center justify-center p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-gray-300 transition-colors"
                onClick={() => handleThemeChange(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-rose-500/60 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                    isActive ? "text-red-400" : ""
                  } py-2`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join-us"
              className={({ isActive }) =>
                `block text-gray-300 hover:text-rose-500/60 transition-colors ${
                  isActive ? "text-red-400" : ""
                } py-2`
              }
              onClick={toggleMenu}
            >
              Join Us
            </NavLink>
            <Button
                className="flex items-center justify-center p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-gray-300 transition-colors"
                onClick={() => handleThemeChange(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
