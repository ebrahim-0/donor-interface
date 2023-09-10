import { Link } from "react-router-dom";
import "./Home.css";
import { auth } from "../../Auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Stats from "./Stats";
export default function Home() {
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <section id="home">
      <section className="hero text-white">
        <div className="w-4/5 mx-auto relative z-10 py-28">
          <h1 className="text-4xl font-bold py-5">#Be a Hero</h1>
          <p className="flex flex-col text-2xl py-5">
            <span>You Shouldn't have to be a Doctor</span>
            To Save A Life
          </p>
          <p className="flex flex-col py-5">
            <span>
              Your decision to donate organs after death can turn a moment of
              sorrow into a
            </span>
            life-saving opportunity for others.
          </p>
          {user ? (
            <Link
              to="/register"
              className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-400 hover:text-slate-900 rounded text-3xl font-medium transition-all duration-300 cursor-pointer"
            >
              Donate Now
            </Link>
          ) : (
            <div className="flex items-center gap-2 w-fit">
              <Link
                to="login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </Link>
              <span>OR</span>
              <Link
                to="signup"
                className="bg-blue-700 hover:bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </section>
      <Stats />
    </section>
  );
}