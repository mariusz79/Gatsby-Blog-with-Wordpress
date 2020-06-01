import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoContainer = styled.div`
  margin: auto 0;
  flex: 0 1 35px;
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "Logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return (
      <LogoContainer as={Link} to='/'>
        <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
      </LogoContainer>
    )
}

export default Logo
