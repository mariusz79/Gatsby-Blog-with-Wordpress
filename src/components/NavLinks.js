import React from "react"
import Link from "gatsby"

const NavLinks = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/books">Books</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/travel">Travel</Link>
    </>
  )
}

export default NavLinks
