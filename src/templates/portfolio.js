import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

// Styles
import { PortfolioWrapper, PortfolioDetails } from "./portfolio.styles"

const portfolioTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.contentfulPortfolio.title} />
      <Hero title={data.contentfulPortfolio.title} />
      <main>
        <PortfolioWrapper>
          <img
            src={data.contentfulPortfolio.image.fluid.src}
            alt={data.contentfulPortfolio.title}
          />
          <PortfolioDetails>
            <div>
              <h3>About</h3>
              {data.contentfulPortfolio.about.about}
            </div>
            <div>
              <h3>Tags</h3>
              <ul>
                {data.contentfulPortfolio.portfolioCategory.map(cat => (
                  <li key={cat.id}>
                    <Link to={`/portfolio-category/${cat.slug}`}>
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr />
              <h3>Review</h3>
              {data.contentfulPortfolio.reviewText.reviewText}
            </div>
          </PortfolioDetails>
        </PortfolioWrapper>
      </main>
    </Layout>
  )
}
export const data = graphql`
  query PortfolioTemplate($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      title
      slug
      about {
        about
      }
      reviewText {
        reviewText
      }
      image {
        fluid(maxWidth: 1200, quality: 85) {
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
`

export default portfolioTemplate
