import { useState } from "react";
import { auth } from "../Auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function RestPwd() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Check Your Email", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setSent(true);
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setSent(false);
    }
  };

  return (
    <section className="bg-blue-50 h-[90vh] flex justify-center items-center">
      {sent ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 items-center justify-between w-[400px] mx-5 sm:mx-0">
          <h2 className="text-2xl font-bold text-center mb-5">
            Check Your Email
          </h2>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white w-fit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 items-center justify-between w-[400px] mx-5 sm:mx-0">
          <h2 className="text-2xl font-bold text-center mb-5">
            Reset Password
          </h2>
          <form className="mb-4" onSubmit={handleReset}>
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
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </section>
  );
}
