"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../footer/footer";
import Image from "next/image";
import { homeIcon } from "@/assets/signinImages";
import { backgroundIcon } from "@/assets/brandlogoImages";

export default function CreateAccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
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

    // Confirm Password validation
    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    // Terms and Conditions validation
    if (!acceptedTerms) {
      formErrors.acceptedTerms = "You must accept the terms and conditions";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit the form
      console.log("Form Submitted:", {
        email,
        password,
        confirmPassword,
        acceptedTerms,
      });
      setErrors({});
    } else {
      // Set errors to display them on the form
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div>
        <Header />
        <Link href="/">
          <Image src={backgroundIcon} alt="home" className="px-10" />
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs italic">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span className="text-sm text-gray-600">
                  Accept all terms & Conditions
                </span>
              </label>
              {errors.acceptedTerms && (
                <p className="text-red-500 text-xs italic">
                  {errors.acceptedTerms}
                </p>
              )}
            </div>
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                href="/signIn"
                className="font-bold text-gray-900 hover:text-green-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
