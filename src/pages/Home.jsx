import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BorrowHistoryModal from "../components/BorrowHistoryModal";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || book.category === category)
  );

  const categories = [...new Set(booksData.map((b) => b.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter category={category} setCategory={setCategory} categories={categories} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onViewHistory={setSelectedBook} />
        ))}
      </div>

      {/* Modal for Borrowing History */}
      {selectedBook && (
        <BorrowHistoryModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default Home;
