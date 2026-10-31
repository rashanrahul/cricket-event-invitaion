
import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "TEAMS", href: "#teams" },
  { name: "COUNTDOWN", href: "#countdown" },
  { name: "EVENT DETAILS", href: "#details" },
  { name: "DJ PARTY", href: "#party" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <div className="navbar-logo-icon">
            <Trophy size={25} />
          </div>

          <div className="navbar-logo-text">
            <strong>CRICKET</strong>
            <span>CHAMPIONSHIP 2026</span>
          </div>
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
