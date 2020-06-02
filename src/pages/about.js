import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const About = () => {
  const data = useStaticQuery(graphql`
    query {
       
      file(name: { eq: "about" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
    }
  `)

  

    return (
      <Layout>
        <h1 style={{ textAlign: "center", margin: "3rem 0", textDecoration: 'underline red' }}>ABOUT ME</h1>
        <AboutSection>
          <Img fluid={data.file.childImageSharp.fluid} alt="about" />
          <div>
            <h3>Hi, my name is Savannah.</h3>
            <h4>I am passionate about books, music and travel.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse urna massa, faucibus ac magna vitae, ultricies
              bibendum erat. Donec sagittis vestibulum leo, quis posuere tortor
              dictum et. Sed euismod dapibus ligula, vel rutrum odio suscipit
              vitae. Vestibulum at maximus urna, in pharetra eros. Nam risus
              dui, mollis ut turpis ut, varius luctus elit. Donec iaculis
              interdum est, at blandit nunc dapibus vitae. Suspendisse sed est
              tempor nisl lobortis vestibulum. Aenean eu est placerat,
              condimentum ante ac, maximus mi.
            </p>
          </div>
        </AboutSection>
      </Layout>
    )
}

export default About
