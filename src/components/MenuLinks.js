import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuLinks = () => {
  const MenuLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "black")};
    transition: all 200ms ease-in;
    position: relative;

    :hover {
      color: darkblue;
    }
  `

  return (
    <>
      <MenuLink to="/books">Books</MenuLink>
      <MenuLink to="/music">Music</MenuLink>
      <MenuLink to="/travel">Travel</MenuLink>
    </>
  )
}

export default MenuLinks
