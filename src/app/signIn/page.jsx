/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../footer/footer";
import { homeIcon } from "@/assets/signinImages";
import {backgroundIcon} from "../../assets/brandlogoImages"

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    // Email validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit the form
      console.log("Form Submitted:", { email, password });
      setErrors({});
    } else {
      // Set errors to display them on the form
      setErrors(formErrors);
    }
  };

  return (
    <>
      <Link href="/contact" />
      <div>
        <Header />
        <Link href="/">
          <Image
            src={backgroundIcon}
            alt="home"
            className="px-10 "
          />
        </Link>
      </div>
      <section>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-quickviewdefault bg-right bg-no-repeat ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <label className="flex items-center">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                </div>
                <div>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-success"
                    href="#"
                  >
                    Forget Password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="bg-success hover:bg-success text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                Don't have an account?
                <a
                  className="font-bold text-gray-900 hover:text-green-700"
                  href="/createaccount"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Page;
