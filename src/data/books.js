const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-help",
    borrowed: true,
    history: [
      { user: "Ashish", date: "2024-10-01" },
      { user: "Ravi", date: "2024-08-15" },
    ],
  },
  {
    id: 2,
    title: "The Money Secret",
    author: "George Orwell",
    category: "Fiction",
    borrowed: false,
    history: [
      { user: "Sneha", date: "2024-09-01" },
    ],
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    borrowed: true,
    history: [{ user: "Balram", date: "2024-09-10" }],
  },
];

export default books;
