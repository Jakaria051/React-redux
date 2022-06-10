import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './booksSlice';
import { v4 as uuidv4 } from 'uuid';


export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const numberOfBooks = useSelector((state) => state.booksReducer.books.length);


  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(),title, author};
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  }
  return (
    <div>
      <h2>AddBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value) }
          required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input type="text" id="author" name="author" 
          value={author}
          onChange={(e) => setAuthor(e.target.value) }
          required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
