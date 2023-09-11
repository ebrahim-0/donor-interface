import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { auth } from "../Auth";
import { signOut } from "firebase/auth";
import useGet from "../Hook/useGet";

export default function Header() {
  const { user } = useGet();
  const [profile, setProfile] = useState(false);

  const navigate = useNavigate();

  const NavLinks = (width, position, mobile) => {
    return (
      <>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="home"
          onClick={() => {
            mobile();
            navigate("/");
          }}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Home
        </Link>
        <Link
          activeClass="active-scroll"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          to="about"
          onClick={() => {
            mobile();
            navigate("/");
          }}
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
          onClick={() => {
            mobile();
            navigate("/");
          }}
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
          onClick={() => {
            mobile();
            navigate("/");
          }}
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
          onClick={() => {
            mobile();
            navigate("/");
          }}
          className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
        >
          Blog
        </Link>

        {user ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hover:text-blue-500 transition-all duration-300 relative"
              onClick={() => {
                setProfile(!profile);
              }}
            >
              <BiUser className="text-3xl" />
            </button>
            {profile && (
              <div
                className={`profile absolute ${position} mt-3 w-full p-5 rounded-lg bg-white/60 max-w-[320px] flex flex-col gap-2 justify-end items-end border-4 transition-all duration-500`}
              >
                <h1 className="capitalize">Welcome ,{user.displayName}</h1>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={async () => {
                    try {
                      await signOut(auth);
                      console.log("User logout");
                      window.location.reload();
                    } catch (error) {
                      console.log(error.message);
                    }
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="login"
            onClick={() => {
              mobile();
              navigate("/login");
            }}
            className={`bg-blue-500 text-white px-3 py-2 hover:bg-blue-400 hover:text-slate-900 rounded text-sm font-medium transition-all duration-300 cursor-pointer ${width}`}
          >
            Login
          </NavLink>
        )}
      </>
    );
  };

  const handleMobileNav = () => {
    document.querySelector(".menu").classList.toggle("-top-[500px]");
    document.querySelector(".menu").classList.toggle("top-9");
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
          {NavLinks("", "right-36 top-14", () => {})}
        </div>

        {/* Mobile Navigation */}

        <div className="sm:hidden flex items-center relative">
          <div className="flex">
            <button
              type="button"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={handleMobileNav}
            >
              <FaBars className="text-3xl" />
            </button>

            <div className="menu absolute -right-[40px] -top-[500px] mt-3 w-full p-5 rounded-lg bg-white/60 min-w-[320px] flex flex-col gap-2 justify-end items-end border-4 transition-all duration-500">
              {NavLinks("w-full", "right-0 -bottom-28", handleMobileNav)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
