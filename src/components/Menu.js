import React from "react"
import styled from "styled-components"
import MenuLinks from "./MenuLinks"

const Menu = () => {
  const Menuu = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid;
    border-bottom: 1px solid;
  `

  return (
    <>
      <Menuu>
        <MenuLinks />
      </Menuu>
    </>
  )
}

export default Menu
