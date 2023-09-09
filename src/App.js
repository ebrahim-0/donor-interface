import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import OrganDonation from "./components/OrganDonation";

function App() {
  return (
    <>
      <header className="shadow-[0_4px_10px_rgb(0,0,0,0.2)] sticky top-0 z-20 bg-white">
        <Header />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <OrganDonation />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
