import { Link } from "react-router-dom";
import "./Home.css";
import Stats from "./Stats";
import useGet from "../../Hook/useGet";
export default function Home() {
  const { id, user } = useGet();

  return (
    <section id="home">
      <section className="hero text-black">
        <div className="w-4/5 mx-auto relative z-10 py-28 text-lg font-medium">
          <h1 className="text-4xl font-bold py-5">#Be a Hero</h1>
          <p className="flex flex-col text-2xl py-5">
            <span>You Shouldn't have to be a Doctor</span>
            To Save A Life
          </p>
          <p className="flex flex-col pb-5">
            <span>
              Your decision to donate organs after death can turn a moment of
              sorrow into a
            </span>
            life-saving opportunity for others.
          </p>
          {user ? (
            id ? (
              <>
                <h1 className="bg-blue-400  text-slate-950 text-lg p-2 rounded w-fit font-medium">
                  You have already registered. Thank you for your and Your ID is{" "}
                  {id}
                </h1>
              </>
            ) : (
              <Link
                to="/register"
                className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-400 hover:text-slate-900 rounded text-3xl font-medium transition-all duration-300 cursor-pointer"
              >
                Donate Now
              </Link>
            )
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
