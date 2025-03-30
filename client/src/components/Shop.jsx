import products from "./Product";

export const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Coffee Selection
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(20%-1.5rem)] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-700 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded transition-colors duration-300"
                  onClick={() => console.log("Added to cart:", product.name)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
