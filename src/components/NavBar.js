import React, { useState } from "react"
import NavLinks from "./NavLinks"
import Logo from "./Logo"
import styled from "styled-components"

const Navigation = styled.nav``
const Cross = styled.div``
const NavContainer = styled.div``
const Hamburger = styled.div``

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Cross openNavBar={openNavBar} onClick={() => setOpenNavBar(!openNavBar)}>
        {openNavBar ? <Hamburger open /> : <Hamburger />}
      </Cross>
      {openNavBar ? (
        <NavContainer>
          <NavLinks />
        </NavContainer>
      ) : (
        <NavContainer open>
          <NavLinks />
        </NavContainer>
      )}
    </Navigation>
  )
}

export default NavBar
