import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {
  const BlogLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "black")};
  `
  return (
    <Layout>
      <SEO title="home" />
      <div  >
        {data.allWordpressPost.edges.map(({ node }) => (
          <div
            key={node.featured_media.localFile.childImageSharp.sizes.src}
            style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
          >
            <BlogLink
              to={node.slug}
              style={{
                display: "flex",
                
                textDecoration: "none",
              }}
            >
              <Img
                sizes={node.featured_media.localFile.childImageSharp.sizes}
                alt={node.title}
                style={{ width: "25%", marginRight: 20 }}
              />
              <div style={{ width: "75%" }}>
                <h3
                  dangerouslySetInnerHTML={{ __html: node.title }}
                  style={{ marginBottom: 0 }}
                />
                {node.categories.map((category, i) => (
                  <p
                    key={
                      i
                    }
                  >
                    {category.name}
                  </p>
                ))}
                <p style={{ margin: 0, color: "grey" }}>{node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </BlogLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
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
export default IndexPage