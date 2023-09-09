import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const NavLinks = (mobile, width) => {
    return (
      <>
        <NavLink
          to="/"
          onClick={mobile}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Home
        </NavLink>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="about"
          onClick={mobile}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          About
        </Link>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="organ-donation"
          onClick={mobile}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Organ Donation
        </Link>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="patients"
          onClick={mobile}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Patients
        </Link>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="blog"
          onClick={mobile}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Blog
        </Link>
        <NavLink
          to="register"
          onClick={mobile}
          className={`bg-blue-500 text-white px-3 py-2 hover:bg-blue-400 hover:text-slate-900 rounded text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Donate Now
        </NavLink>
      </>
    );
  };

  const handleMobileNav = () => {
    setToggleDropdown(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center w-4/5 mx-auto py-4">
        <NavLink to="/" className="flex items-center">
          <h1 className="text-blue-500 text-2xl font-bold">
            Life<span className="text-black">Giver</span>
          </h1>
        </NavLink>
        {/* Desktop Navigation */}

        <div className="sm:flex items-center hidden sm:gap-3 gap-5 text-base">
          {NavLinks()}
        </div>

        {/* Mobile Navigation */}

        <div className="sm:hidden flex items-center relative">
          <div className="flex">
            <button
              type="button"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
                document
                  .querySelector(".menu")
                  .classList.toggle("-top-[500px]");
                document.querySelector(".menu").classList.toggle("top-9");
              }}
            >
              <FaBars className="text-3xl" />
            </button>

            <div className="menu absolute -right-[40px] -top-[500px] mt-3 w-full p-5 rounded-lg bg-white/60 min-w-[320px] flex flex-col gap-2 justify-end items-end border-4 transition-all duration-500">
              {NavLinks(handleMobileNav, "w-full")}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
