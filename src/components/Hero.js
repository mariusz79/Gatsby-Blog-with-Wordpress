import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const HeroImage = styled.div``
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(name: { eq: "hero1" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(name: { eq: "hero" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <HeroImage>
      <Img fluid={sources} alt="hero" />
    </HeroImage>
  )
}

export default Hero
