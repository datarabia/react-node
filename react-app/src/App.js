import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  const handleBookClick = (id) => {
    fetch(`/api/books/${id}`)
      .then(res => res.json())
      .then(data => setSelectedBook(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <h1>Books</h1>
      <div className="book-list">
        {books.map(book => (
          <div> {book.title} 
            <button key={book.id} onClick={() => handleBookClick(book.id)} className="book-item">Select</button>
            </div>
        ))}
      </div>
     Selected Book: {selectedBook && (
        <div className="selected-book">
          <h2>{selectedBook.title}</h2>
          <p>{selectedBook.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
