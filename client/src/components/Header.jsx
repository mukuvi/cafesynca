export const Header = () => {
  return (
    <div>
      <div className="text-center bg-amber-900 text-white p-4">
        <p className="text-lg font-semibold">
          Where every sip creates a moment of cherish
        </p>
      </div>

      <nav className="bg-white flex justify-between items-center w-full p-4 shadow-md">
        <div className="ml-2">
          <h1 className="text-2xl font-bold text-gray-800">Cafesynca</h1>
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

        <div className="flex gap-8 mr-4">
          <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
            Search
          </h2>
          <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
            Account
          </h2>
          <h2 className="text-lg text-gray-800 hover:text-amber-900 cursor-pointer">
            Cart
          </h2>
        </div>
      </nav>
    </div>
  );
};
