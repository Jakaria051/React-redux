import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from '../features/book/AddBook';
import BookView from '../features/book/BookView';
import EditBook from '../features/book/EditBook';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

export default function index() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BookView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="*" element={<Error />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}
