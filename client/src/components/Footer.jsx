import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-[#3e2723] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="footer-col">
            <h3 className="text-amber-300 text-xl font-medium mb-5">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  All Coffee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Coffee Subscriptions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Gift Cards
                </a>
              </li>
              <li></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-amber-300 text-xl font-medium mb-5">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Farmers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-amber-300 text-xl font-medium mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-amber-300 text-xl font-medium mb-5">
              Follow Us
            </h3>
            <div className="social-icons flex gap-4 mb-6">
              <a
                href="#"
                className="text-white hover:text-amber-500 transition-colors text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-500 transition-colors text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-500 transition-colors text-xl"
              >
                <FaInstagram />
              </a>
            </div>

            <h3 className="text-amber-500 text-xl font-medium mb-3">
              Newsletter
            </h3>
            <form className="footer-newsletter flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-l focus:outline-none text-gray-800 bg-amber-50"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-r transition-colors"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white border-opacity-10 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="legal-links flex flex-wrap gap-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-white hover:text-amber-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-500 text-sm transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="copyright text-sm text-white text-opacity-70">
            &copy; {new Date().getFullYear()} CafeSynca. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
