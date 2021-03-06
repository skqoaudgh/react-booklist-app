import React from 'react';

import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBooKForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBooKForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
