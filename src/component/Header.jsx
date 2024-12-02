import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import Container from "../component/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about-us" },
    { name: "Contact Us", slug: "/contact" },
  ];

  return (
    <header className="w-full bg-[#EDF2F7] relative">
      <Container className={`${isMenuOpen ? "flex-col" : ""}`}>
        <nav className="flex w-full justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="mr-2">
              <img
                loading="lazy"
                src={logo}
                alt="Logo"
                className="h-[50px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center laptop:flex space-x-6">
            {
              navItems.map((item) => (
                <li key={item.name}>
                  {
                    <Link to={item.slug}
                      className="text-lg font-bold text-[#2c2c54] hover:bg-[#d1e8ff] hover:text-[#0000ff] p-2 rounded-lg">
                      {item.name}
                    </Link>
                  }
                </li>
              ))
            }
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="laptop:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-2xl focus:outline-none">
              <span>&#9776; {/* Hamburger icon */}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full h-auto absolute top-0 right-0 z-10 
          laptop:hidden flex flex-col items-center space-y-4 py-4
           bg-white transition-all duration-300">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none self-end mr-[20px]">
              <span>&#10005;</span>
            </button>

            {navItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                {
                  item.active &&
                  <Link
                    to={item.slug}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold text-[#2c2c54] 
                    hover:bg-[#d1e8ff] hover:text-[#0000ff] py-2 px-4 rounded-lg">
                    {item.name}
                  </Link>
                }
              </div>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
