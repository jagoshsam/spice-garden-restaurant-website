import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-orange-600">
          Spice Garden
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li>
            <a href="#home" className="hover:text-orange-600">
              Home
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-orange-600">
              Menu
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-orange-600">
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-orange-600 text-white px-5 py-2 rounded-lg"
        >
          Reserve Table
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-8 pb-5">

          <div className="flex flex-col gap-4">

            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>

            <a
              href="#contact"
              className="bg-orange-600 text-white px-5 py-2 rounded-lg text-center"
            >
              Reserve Table
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;