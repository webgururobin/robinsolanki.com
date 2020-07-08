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
    allContentfulPortfolio(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          slug
          image {
            fluid(maxWidth: 1200, quality: 85) {
              src
            }
          }
          portfolioCategory {
            title
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Full Stack Web Developer" />
      <Hero title="Full Stack Web Developer" />
      <main>
        <CardContainer>
          {data.allContentfulPortfolio.edges.map(edge => (
            <Card key={edge.node.id} data={edge.node} type="portfolio" />
          ))}
        </CardContainer>
      </main>
    </Layout>
  )
}

export default IndexPage
