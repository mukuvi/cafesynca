import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
export const Header = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <div
          style={{ backgroundColor: "#3e2723" }}
          className="text-center bg-amber-900 text-white p-1 "
        >
          <p className="text-lg font-semibold">
            Where every sip creates a moment of cherish
          </p>
        </div>

        <nav className="bg-white flex justify-between items-center w-full p-4 shadow-md ">
          <div className="ml-2">
            <h1 className="text-3xl font-bold text-gray-800">Cafesynca</h1>
          </div>

          <div className="flex gap-8">
            <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
              Shop
            </h2>
            <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
              Why Cafesynca
            </h2>
            <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
              Blog
            </h2>
          </div>

          <div className="flex gap-6 mr-4">
            <button className="flex items-center gap-2 text-lg text-gray-800 hover:text-amber-900 transition-colors">
              <FiSearch className="text-xl" />
            </button>

            <button className="flex items-center gap-2 text-lg text-gray-800 hover:text-amber-900 transition-colors">
              <FiUser className="text-xl" />
            </button>

            <button className="flex items-center gap-2 text-lg text-gray-800 hover:text-amber-900 transition-colors">
              <FiShoppingCart className="text-xl" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
