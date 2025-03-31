const BookClub = ({ onJoinDiscussion }) => {
  const books = [
    {
      id: 1,
      title: "The World Atlas of Coffee",
      author: "James Hoffmann",
      cover:
        "https://m.media-amazon.com/images/I/91+UEVXiodL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Explores coffee production from bean to cup across 35 countries",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Coffee Obsession",
      author: "Anette Moldvaer",
      cover:
        "https://m.media-amazon.com/images/I/81yG+Q-EejL._AC_UF1000,1000_QL80_.jpg",
      description: "Perfect your coffee-making techniques with expert guidance",
      rating: 4.6,
    },
    {
      id: 3,
      title: "The Coffee Recipe Book",
      author: "Daniel Lancaster",
      cover:
        "https://m.media-amazon.com/images/I/71u+4a2hXbL._AC_UF1000,1000_QL80_.jpg",
      description: "50 recipes to brew espresso-based drinks at home",
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#6f4e37] mb-2">
          Book Lovers' Corner
        </h2>
        <p className="text-gray-600 mb-6">
          Discover, discuss, and enjoy books about coffee culture and brewing
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x400?text=Book+Cover";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-[#c4a484] mb-2">by {book.author}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {book.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-700">
                      {book.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => onJoinDiscussion(book.title)}
                    className="px-4 py-2 bg-[#6f4e37] text-white rounded-lg hover:bg-[#5a3d2a] transition-colors"
                  >
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookClub;
