import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id='nav'>
        <Link to="/" className='nav-prop nav-link'>
            Home
        </Link>
        <Link to="/show-books" className="nav-prop nav-link">
            Show Books
        </Link>
        <Link to="/add-book" className="nav-prop nav-link">
            Add Book
        </Link>
    </nav>
  )
}
