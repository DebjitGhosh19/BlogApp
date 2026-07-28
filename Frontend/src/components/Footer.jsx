import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t py-10 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  iOS
                </a>
              </li>
            </ul>
          </div>

          {/* Design */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Design to Code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Figma Plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Comparison */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  DhiWise vs Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  DhiWise vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  DhiWise vs FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  DhiWise vs Retool
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-500 hover:text-blue-500"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Blog<span className="text-blue-500">ify</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © 2026 Blogify. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-blue-500 transition duration-300" />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="w-6 h-6 hover:text-red-500 transition duration-300" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;