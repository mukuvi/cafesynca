const BookClub = ({ onJoinDiscussion }) => {
  const books = [
    {
      id: 1,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      cover:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Explores fundamental questions about the universe and physics",
      rating: 4.7,
      genre: "Science",
    },
    {
      id: 2,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      cover:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Classic book about human-centered design principles",
      rating: 4.6,
      genre: "Engineering",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Powerful novel about racial injustice and moral growth",
      rating: 4.8,
      genre: "Literature",
    },
    {
      id: 4,
      title: "The Gene: An Intimate History",
      author: "Siddhartha Mukherjee",
      cover:
        "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Fascinating exploration of genetics and heredity",
      rating: 4.6,
      genre: "Science",
    },
    {
      id: 5,
      title: "The Innovators",
      author: "Walter Isaacson",
      cover:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Story of the people who created the digital revolution",
      rating: 4.5,
      genre: "Engineering",
    },
    {
      id: 6,
      title: "1984",
      author: "George Orwell",
      cover:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Dystopian classic about totalitarianism and surveillance",
      rating: 4.7,
      genre: "Literature",
    },
    {
      id: 7,
      title: "Cosmos",
      author: "Carl Sagan",
      cover:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Journey through space, time, and the evolution of consciousness",
      rating: 4.8,
      genre: "Science",
    },
    {
      id: 8,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      cover:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Essential software engineering practices and principles",
      rating: 4.7,
      genre: "Engineering",
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
