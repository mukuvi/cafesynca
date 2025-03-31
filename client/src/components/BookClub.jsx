const BookClub = () => {
  const books = [
    {
      id: 1,
      title: "The Coffee Trader",
      author: "David Liss",
      cover: "/images/book1.jpg",
    },
    {
      id: 2,
      title: "Uncommon Grounds",
      author: "Mark Pendergrast",
      cover: "/images/book2.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-dark mb-4">Book Club</h2>
      <p className="text-gray-700 mb-6">
        Join our community of coffee-loving readers. Explore our collection and
        discuss your favorite books.
      </p>

      <h3 className="text-xl font-semibold mb-4">Featured Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <div key={book.id} className="flex gap-4 items-start">
            <img
              src={book.cover}
              alt={book.title}
              className="w-24 h-32 object-cover rounded"
            />
            <div>
              <h4 className="font-bold">{book.title}</h4>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <button className="mt-2 px-3 py-1 bg-primary text-white text-sm rounded hover:bg-dark transition">
                Join Discussion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookClub;
