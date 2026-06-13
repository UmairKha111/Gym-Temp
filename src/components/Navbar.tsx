import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gymData from "../data/gymData";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt={gymData.gymName}
            className="h-14 w-14 object-cover rounded-full border-2 border-red-500"
          />

          <div>
            <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
              {gymData.gymName}
            </h1>

            <p className="text-xs uppercase tracking-wider text-red-500">
              Strength of Men
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-red-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href={`https://wa.me/${gymData.phone}`}
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="flex flex-col p-6 gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-red-500 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href={`https://wa.me/${gymData.phone}`}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-center py-3 rounded-lg font-semibold"
            >
              Join Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;