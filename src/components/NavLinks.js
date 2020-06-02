import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: red;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const ToggleButton = styled.button`
  border-radius: 8px;
  outline: none;
  color: black;
  border: 2px solid gray;
  transition: all 200ms ease-in;
  :hover {
    color: white;
    background-color: darkgray;
    border: 2px solid black;
  }
`
const NavLinks = ({ setTheme }) => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <ToggleButton onClick={setTheme}>Toggle theme</ToggleButton>
    </>
  )
}

export default NavLinks
