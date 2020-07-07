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
  query PortfolioCategoryTemplate($id: String!) {
    contentfulPortfolioCategory(id: { eq: $id }) {
      id
      title
      portfolio {
        id
        title
        slug
        portfolioCategory {
          id
          title
          slug
        }
        image {
          fluid(quality: 85, maxWidth: 1200) {
            src
          }
        }
      }
    }
  }
`

const PortfolioCategoryTemplate = ({ data }) => {
  const category = data.contentfulPortfolioCategory
  const portfolios = data.contentfulPortfolioCategory.portfolio
  return (
    <Layout>
      <SEO title={category.title} />
      <Hero title={category.title} />
      <main>
        <CardContainer>
          {portfolios.map(item => (
            <Card data={item} />
          ))}
        </CardContainer>
      </main>
    </Layout>
  )
}

export default PortfolioCategoryTemplate
