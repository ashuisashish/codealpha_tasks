const BookCard = ({ book, onViewHistory }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-200">
    <h2 className="text-xl font-semibold text-indigo-700">{book.title}</h2>
    <p className="text-gray-600 mb-1">by <span className="font-medium">{book.author}</span></p>
    <p className="text-sm text-gray-500 mb-2">📂 {book.category}</p>
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${book.borrowed ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
      {book.borrowed ? "Borrowed" : "Available"}
    </span>

    <button
      onClick={() => onViewHistory(book)}
      className="block mt-4 text-sm text-indigo-600 hover:underline"
    >
      View History
    </button>
  </div>
);

export default BookCard;
