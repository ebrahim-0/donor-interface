import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../Auth";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(true);

  const [pwdFocus, setPwdFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/testlogin");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  return (
    <section className="bg-blue-50 h-[90vh] flex justify-center items-center">
      <form
        className="bg-white rounded-md px-8 pt-6 pb-8 mb-4 w-[400px] mx-5 sm:mx-0 shadow-xl"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-9">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-500 italic">
            {!validEmail && emailFocus && "Invalid Email"}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 italic mb-3">
            {password.length < 8 &&
              pwdFocus &&
              "Password must be 8 characters long"}
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/reset-password"
          >
            Forgot Password?
          </Link>
          <span className="text-gray-700">Or</span>
          <div>
            Create an account?
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}
