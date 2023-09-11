import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import OrganDonation from "./components/OrganDonation";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Auth";
import Register from "./components/Register";
import useGet from "./Hook/useGet";
import TestLogin from "./components/Login/TestLogin";
import Stories from "./components/Stoties/Stories";
import Blog from "./components/Blog";

function App() {
  const [user, setUser] = useState("");
  const { id } = useGet();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

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
              <Stories />
              <Blog />
            </>
          }
        />

        <Route
          path="login"
          element={
            <ProtectedRoute user={user}>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route path="testlogin" element={<TestLogin />} />

        <Route
          path="signup"
          element={
            <ProtectedRoute user={user}>
              <SignUp />
            </ProtectedRoute>
          }
        />

        <Route
          path="register"
          element={
            <ProtectedRoute user={id}>
              <Register />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
