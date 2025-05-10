const BorrowHistoryModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Borrowing History - {book.title}</h2>
        {book.history.length === 0 ? (
          <p className="text-gray-500">No history available.</p>
        ) : (
          <ul className="space-y-2">
            {book.history.map((entry, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                📅 <strong>{entry.date}</strong> – borrowed by <strong>{entry.user}</strong>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BorrowHistoryModal;
