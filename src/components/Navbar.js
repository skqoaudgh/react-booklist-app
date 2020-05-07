import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>카다의 도서 목록</h1>
      <p>현재 {books.length}권을 가지고 있습니다.</p>
    </div>
  );
};

export default Navbar;
