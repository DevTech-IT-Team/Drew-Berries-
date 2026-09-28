import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Leaf } from "lucide-react";
import logo from '/public/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Updated closeMenu to also force scroll to top
  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Force scroll to top on any link click (Desktop & Mobile)
  const handleNavLinkClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) closeMenu(); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinkClasses = (path) => `
    text-[13px] font-sans font-bold uppercase tracking-[0.15em] transition-all duration-300
    relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full 
    after:origin-bottom-right after:scale-x-0 after:bg-[#4B5320] after:transition-transform 
    after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100
    ${isActive(path) ? "text-[#4B5320] after:scale-x-100" : "text-stone-600 hover:text-[#4B5320]"}
  `;

  // Keeping your exact original labels
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Membership", path: "/membership" },
    // { name: "Offerings", path: "/offerings" },
    { name: "This Week's Harvest", path: "/harvest" },
    { name: "Wholesale", path: "/wholesale" },
    { name: "Cabins", path: "/cabins" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-100/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20">

          <div className="flex items-center">
            <Link to="/" onClick={handleNavLinkClick} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white  group-hover:rotate-6 transition-transform">
                <img src={logo} alt="Logo" className="w-[100px] h-[100px] object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl font-serif font-black text-[#2D2A26] tracking-tighter">
                  Drew’s Berries
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#4B5320] font-bold mt-1.5">
                  Drusus Foundation
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={navLinkClasses(link.path)}
                onClick={handleNavLinkClick}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/membership"
              onClick={handleNavLinkClick}
              className="bg-[#4B5320] text-white px-6 py-2.5 rounded-xl text-[11px] font-sans font-black uppercase tracking-widest hover:bg-[#3d441a] transition-all shadow-xl shadow-[#4B5320]/10 active:scale-95"
            >
              Join Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-600 p-3 hover:bg-[#4B5320]/5 rounded-xl transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-[#FDFBF7] border-b border-stone-200 shadow-2xl py-8 px-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavLinkClick}
              className={`block w-full text-left px-4 py-3 text-sm font-sans font-bold uppercase tracking-widest rounded-xl transition-all ${isActive(link.path)
                ? "text-[#4B5320] bg-[#4B5320]/5"
                : "text-stone-500 hover:text-[#4B5320] hover:bg-stone-50"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/membership"
              onClick={handleNavLinkClick}
              className="block w-full bg-[#4B5320] text-white py-4 rounded-xl font-sans font-black uppercase tracking-widest text-center shadow-lg"
            >
              Join the Association
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;