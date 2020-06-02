import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 1.0875rem 0 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
flex-direction: column-reverse;
  }
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "social" } }) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        borderTop: "1px solid grey",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FooterContainer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div >
          
          {data.allFile.edges.map(image => (
            <Img
              fixed={image.node.childImageSharp.fixed}
              // only use section of the file extension with the filename
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </FooterContainer>
    </div>
  )
}

export default Footer
