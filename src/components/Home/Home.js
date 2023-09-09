import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
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
          <Link
            to="/register"
            className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-400 hover:text-slate-900 rounded text-3xl font-medium transition-all duration-300 cursor-pointer"
          >
            Donate Now
          </Link>
        </div>
      </section>
      <section className="w-4/5 mx-auto relative -mt-36">
        <div className="grid items-center justify-items-center xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-16">
          <div className="p-9 bg-blue-500 rounded text-white h-full">
            <img
              src="/images/waiting-list.png"
              alt="Waiting List"
              className="object-cover max-w-[15%]"
            />
            <p>104,234+</p>
            <p>
              Number of men, women, and children on the national transplant
              waiting list.
            </p>
          </div>
          <div className="p-9 bg-blue-500 rounded text-white h-full">
            <img
              src="/images/hourglass.png"
              alt="Hourglass"
              className="object-cover max-w-[15%]"
            />
            <p>17+</p>
            <p>People die each day waiting for an organ transplant.</p>
          </div>
          <div className="p-9 bg-blue-500 rounded text-white h-full">
            <img
              src="/images/organ-donation.png"
              alt="Organ Donation"
              className="object-cover max-w-[15%]"
            />
            <p>You can help</p>
            <p>Every donor can save 8 lives and enhance over 75 more.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
