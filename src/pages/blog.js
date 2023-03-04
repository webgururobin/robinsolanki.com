import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Card from "../components/Card"

// styles
import { CardContainer } from "../components/Card/Card.styles"

export const query = graphql`
  {
    featured: allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          slug
          title
          image {
            fluid(maxWidth: 1200, quality: 85) {
              src
            }
          }
          content {
            content
          }
        }
      }
    }
    all: allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
      skip: 1
    ) {
      edges {
        node {
          slug
          title
          image {
            fluid(maxWidth: 1200, quality: 85) {
              src
            }
          }
          content {
            content
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const featured = data.featured.edges[0].node
  const all = data.all

  return (
    <Layout>
      <Seo title="Blog" />
      <Hero title="Blog" />
      <main>
        <Card data={featured} type="blog" featured="featured" />
        <CardContainer>
          {all.edges.map(edge => (
            <Card key={edge.node.id} data={edge.node} type="blog" />
          ))}
        </CardContainer>
      </main>
    </Layout>
  )
}

export default BlogPage
