import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Img from "gatsby-image"
import SEO from "../components/seo"

const BooksPage = ({ data }) => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `
  const BlogLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "black")};
    transition: all 200ms ease-in;
    position: relative;
    :hover {
      color: red;
    }
  `
  return (
    <Layout>
      <SEO title="books" />
      <Menu />
      <Container>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div
            key={node.featured_media.localFile.childImageSharp.fluid.sizes.src}
            style={{ borderRadius: "5px 5px 0 0 " }}
          >
            <BlogLink to={node.categories[0].slug + "/" + node.slug} style={{}}>
              <Img
                sizes={node.featured_media.localFile.childImageSharp.fluid}
                alt={node.title}
                style={{ borderRadius: "5px 5px 0 0" }}
              />
              <div style={{}}>
                <p
                  style={{
                    margin: 0,
                    color: "grey",
                    textTransform: "uppercase",
                  }}
                >
                  {node.categories[0].slug}
                </p>
                <h3
                  dangerouslySetInnerHTML={{ __html: node.title }}
                  style={{ marginBottom: 0 }}
                />

                <p style={{ margin: 0, color: "grey" }}>{node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </BlogLink>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
         query {
           allWordpressPost(
             sort: { fields: [date] }
             filter: { categories: { elemMatch: { name: { eq: "Books" } } } }
           ) {
             edges {
               node {
                 title
                 excerpt
                 slug
                 date(formatString: "MMMM DD, YYYY")
                 categories {
                   slug
                 }
                 featured_media {
                   localFile {
                     childImageSharp {
                       fluid(maxWidth: 1000, maxHeight: 350) {
                         ...GatsbyImageSharpFluid
                         ...GatsbyImageSharpFluidLimitPresentationSize
                         src
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `
export default BooksPage
