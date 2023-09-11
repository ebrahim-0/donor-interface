/* eslint-disable no-useless-escape */

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    validName: true,
    validEmail: true,
    validPwd: true,
    validMatch: true,
    error: false,
    userFocus: false,
    emailFocus: false,
    pwdFocus: false,
    matchFocus: false,
  });

  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      validName: USER_REGEX.test(formData.userName),
    }));
  }, [formData.userName]);

  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      validEmail: EMAIL_REGEX.test(formData.email),
    }));
  }, [formData.email]);

  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      validPwd: PWD_REGEX.test(formData.password),
    }));
    setFormData((formData) => ({
      ...formData,
      validMatch: formData.password === formData.confirmPassword,
    }));
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.error) {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
        .then(async () => {
          await updateProfile(auth.currentUser, {
            displayName: formData.userName,
          });
          setFormData((formData) => ({
            ...formData,
            error: false,
            done: true,
          }));
        })
        .catch((error) => {
          toast.error(error.message);
          setFormData((formData) => ({
            ...formData,
            error: true,
            done: false,
          }));
        });

      navigate("/");
      window.location.reload();
    }
  };
  return (
    <section className="bg-blue-50 h-[90vh] flex justify-center items-center">
      <form
        className="bg-white rounded-md px-8 pt-6 pb-8 mb-2 w-[400px] shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-9">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            onFocus={() =>
              setFormData((formData) => ({ ...formData, userFocus: true }))
            }
            onBlur={() =>
              setFormData((formData) => ({ ...formData, userFocus: false }))
            }
          />
          <span
            className={
              formData.userName && !formData.validName && formData.userFocus
                ? "text-red-500 text-xs italic"
                : "absolute left-[-9999px]"
            }
          >
            Username must be 4-24 characters long and can only contain letters,
            numbers, hyphens, and underscores.
          </span>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onFocus={() =>
              setFormData((formData) => ({ ...formData, emailFocus: true }))
            }
            onBlur={() =>
              setFormData((formData) => ({ ...formData, emailFocus: false }))
            }
          />

          <span
            className={
              formData.email && !formData.validEmail && formData.emailFocus
                ? "text-red-500 text-xs italic"
                : "absolute left-[-9999px]"
            }
          >
            Please enter a valid email address.
          </span>
        </div>
        <div className="mb-2">
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
            placeholder="******************"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            onFocus={() =>
              setFormData((formData) => ({ ...formData, pwdFocus: true }))
            }
            onBlur={() =>
              setFormData((formData) => ({ ...formData, pwdFocus: false }))
            }
          />
          <span
            className={
              formData.password && !formData.validPwd && formData.pwdFocus
                ? "text-red-500 text-xs italic"
                : "absolute left-[-9999px]"
            }
          >
            Password must be 8-24 characters long and contain at least one
            uppercase letter, one lowercase letter, one number, and one special
            character.
          </span>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            onFocus={() =>
              setFormData((formData) => ({ ...formData, matchFocus: true }))
            }
            onBlur={() =>
              setFormData((formData) => ({ ...formData, matchFocus: false }))
            }
          />
          <span
            className={
              formData.confirmPassword &&
              !formData.validMatch &&
              formData.matchFocus
                ? "text-red-500 text-xs italic"
                : "absolute left-[-9999px]"
            }
          >
            Passwords must match.
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-between">
          <button
            disabled={
              !formData.validName ||
              !formData.validEmail ||
              !formData.validPwd ||
              !formData.validMatch
                ? true
                : false
            }
            className="bg-blue-700 hover:bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <span className="text-gray-700">Or</span>
          <div>
            Already have an account?{" "}
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/login"
            >
              Sign In
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}
