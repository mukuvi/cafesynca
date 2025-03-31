const BookClub = () => {
  const books = [
    {
      id: 1,
      title: "The World Atlas of Coffee",
      author: "James Hoffmann",
      cover: "https://images-na.ssl-images-amazon.com/images/I/91+UEVXiodL.jpg",
      description:
        "Explores coffee production from bean to cup across 35 countries",
    },
    {
      id: 2,
      title: "Coffee Obsession",
      author: "Anette Moldvaer",
      cover:
        "https://m.media-amazon.com/images/I/81yG+Q-EejL._AC_UF1000,1000_QL80_.jpg",
      description: "Perfect your coffee-making techniques with expert guidance",
    },
    {
      id: 3,
      title: "The Coffee Recipe Book",
      author: "Daniel Lancaster",
      cover:
        "https://m.media-amazon.com/images/I/71u+4a2hXbL._AC_UF1000,1000_QL80_.jpg",
      description: "50 recipes to brew espresso-based drinks at home",
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
              className="border rounded-lg overflow-hidden hover:shadow-md transition-all"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">{book.title}</h3>
                <p className="text-[#c4a484] mb-2">by {book.author}</p>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">⭐ 4.8/5</span>
                  <button className="px-4 py-2 bg-[#6f4e37] text-white rounded-lg hover:bg-[#5a3d2a] transition">
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
