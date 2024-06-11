const express = require('express');
const app = express();
var path = require('path');

// Sample data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Endpoint to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Endpoint to get a single book by ID
app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});
app.use("/public", express.static(path.join(__dirname, 'public')));

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
