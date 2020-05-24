import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <ul style={{ listStyle: "none" }}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <li
            key={node.featured_media.localFile.childImageSharp.sizes.src}
            style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
          >
            <Link
              to={node.slug}
              style={{
                display: "flex",
                color: "black",
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
                {node.categories.map(category => (
                  <p>{category.name}</p>
                ))}
                <p style={{ margin: 0, color: "grey" }}>{node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
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
