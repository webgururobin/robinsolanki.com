import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

import Star from "../images/star.svg"
import Img from "gatsby-image"

// Styles
import { PortfolioWrapper, PortfolioDetails } from "./portfolio.styles"

const portfolioTemplate = ({ data }) => {
  let stars = []
  for (let i = 0; i < data.contentfulPortfolio.reviewStars; ++i) {
    stars.push(<img alt="rating" key={i} className="star" src={Star} />)
  }

  const checkReviews = () => {
    if (data.contentfulPortfolio.reviewStars) {
      return (
        <>
          <hr />
          <h3>Review</h3>
          <div className="reviews">{stars}</div>
          {data.contentfulPortfolio.reviewText.reviewText}
          <p className="reviewer">- {data.contentfulPortfolio.reviewBy}</p>
        </>
      )
    }
  }

  return (
    <Layout>
      <Seo title={data.contentfulPortfolio.title} />
      <Hero title={data.contentfulPortfolio.title} />
      <main>
        <PortfolioWrapper>
          <Img fluid={data.contentfulPortfolio.image.fluid} />
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
              <h3>Country</h3>
              <p>{data.contentfulPortfolio.country}</p>

              {checkReviews()}
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
      country
      about {
        about
      }
      reviewText {
        reviewText
      }
      reviewStars
      reviewBy
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
