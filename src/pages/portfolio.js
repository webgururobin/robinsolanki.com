import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Card from "../components/Card"

// styles
import { CardContainer } from "../components/Card/Card.styles"

export const query = graphql`
  {
    allContentfulPortfolio(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
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

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Hero title="Portfolio" />
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

export default PortfolioPage
