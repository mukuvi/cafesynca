import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        style={{ backgroundColor: "#3e2723" }}
        className="text-center bg-amber-900 text-white p-1 sm:p-2"
      >
        <p className="text-sm sm:text-lg font-semibold">
          Where every sip creates a moment of cherish
        </p>
      </div>

      <nav className="bg-white flex justify-between items-center w-full p-4 shadow-md">
        <button
          className="md:hidden ml-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className="md:ml-2 mx-auto md:mx-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Cafesynca
          </h1>
        </div>

        <div className="hidden md:flex gap-6 lg:gap-8">
          <a
            href="#"
            className="text-lg text-gray-800 hover:text-amber-900 transition-colors"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-lg text-gray-800 hover:text-amber-900 transition-colors"
          >
            Why Cafesynca
          </a>
          <a
            href="#"
            className="text-lg text-gray-800 hover:text-amber-900 transition-colors"
          >
            Blog
          </a>
        </div>

        <div className="flex gap-4 sm:gap-6 mr-2 sm:mr-4">
          <button className="text-gray-800 hover:text-amber-900 transition-colors">
            <FiSearch className="text-xl" />
          </button>
          <button className="text-gray-800 hover:text-amber-900 transition-colors">
            <FiUser className="text-xl" />
          </button>
          <button className="text-gray-800 hover:text-amber-900 transition-colors">
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#"
              className="text-gray-800 hover:text-amber-900 transition-colors py-2"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-amber-900 transition-colors py-2"
            >
              Why Cafesynca
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-amber-900 transition-colors py-2"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
