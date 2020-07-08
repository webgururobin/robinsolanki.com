import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "components/Layout"
import SEO from "components/SEO"
import Hero from "components/Hero"
import Card from "components/Card"

// styles
import { CardContainer } from "components/Card/Card.styles"

export const query = graphql`
  query PortfolioCategoryTemplate($id: String!) {
    allContentfulPortfolio(
      filter: { portfolioCategory: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          id
          title
          image {
            fluid(quality: 85, maxWidth: 1200) {
              src
            }
          }
          portfolioCategory {
            id
            title
            slug
          }
        }
      }
    }
    contentfulPortfolioCategory(id: { eq: $id }) {
      title
    }
  }
`

const PortfolioCategoryTemplate = ({ data }) => {
  console.log(data)
  const category = data.contentfulPortfolioCategory
  const portfolios = data.allContentfulPortfolio

  return (
    <Layout>
      <SEO title={category.title} />
      <Hero title={category.title} />
      <main>
        <CardContainer>
          {portfolios.edges.map(edge => (
            <Card key={edge.node.id} data={edge.node} type="portfolio" />
          ))}
        </CardContainer>
      </main>
    </Layout>
  )
}

export default PortfolioCategoryTemplate
