export const Subscribe = () => {
  return (
    <div className="bg-[#c4a484] text-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Join Our Coffee Club
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Subscribe to receive exclusive offers and coffee tips
      </p>

      <form className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-5 py-2 text-gray-800 bg-white rounded-l focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#3e2723] hover:bg-[#6f4e37] text-white px-6 py-4 rounded-r transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
