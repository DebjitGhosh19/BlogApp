import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.backendUrl}/api/users/logout`,
        { withCredentials: true }
      );

      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      setShow(false);
      navigateTo("/login");
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <nav className="shadow-lg sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          Blog<span className="text-blue-500">ify</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 duration-200">
              HOME
            </Link>A
          </li>

          <li>
            <Link to="/blogs" className="hover:text-blue-500 duration-200">
              BLOGS
            </Link>
          </li>

          <li>
            <Link to="/creators" className="hover:text-blue-500 duration-200">
              CREATORS
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-500 duration-200">
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-500 duration-200">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && profile?.user?.role === "admin" && (
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 duration-300"
            >
              DASHBOARD
            </Link>
          )}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 duration-300"
            >
              LOGIN
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 duration-300"
            >
              LOGOUT
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setShow(!show)}
          aria-label="Toggle Menu"
        >
          {show ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setShow(false)}
                className="hover:text-blue-500"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                onClick={() => setShow(false)}
                className="hover:text-blue-500"
              >
                BLOGS
              </Link>
            </li>

            <li>
              <Link
                to="/creators"
                onClick={() => setShow(false)}
                className="hover:text-blue-500"
              >
                CREATORS
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setShow(false)}
                className="hover:text-blue-500"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setShow(false)}
                className="hover:text-blue-500"
              >
                CONTACT
              </Link>
            </li>

            {isAuthenticated && profile?.user?.role === "admin" && (
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setShow(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  DASHBOARD
                </Link>
              </li>
            )}

            {!isAuthenticated ? (
              <li>
                <Link
                  to="/login"
                  onClick={() => setShow(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  LOGIN
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;