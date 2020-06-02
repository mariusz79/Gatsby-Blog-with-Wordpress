import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div>
        <Img
          sizes={post.featured_media.localFile.childImageSharp.fluid}
          alt={post.title}
          style={{ maxHeight: 450 }}
        />
        <h1>{post.title}</h1>
        <p style={{ margin: 0, color: "grey" }}>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
         query($slug: String!) {
           allWordpressPost(filter: { slug: { eq: $slug } }) {
             edges {
               node {
                 title
                 content
                 excerpt
                 date(formatString: "MMMM DD, YYYY")
                 categories {
                   slug
                 }
                 featured_media {
                   localFile {
                     childImageSharp {
                       fluid(maxWidth: 600) {
                         ...GatsbyImageSharpFluid
                         ...GatsbyImageSharpFluidLimitPresentationSize
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `
