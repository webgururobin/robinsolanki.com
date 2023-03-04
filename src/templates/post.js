import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

import Img from "gatsby-image"

// Styles
import { PortfolioWrapper, PortfolioDetails } from "./portfolio.styles"

const postTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.contentfulPost.title} />
      <Hero title={data.contentfulPost.title} />
      <main>
        <PortfolioWrapper>
          <Img fluid={data.contentfulPost.image.fluid} />
          <PortfolioDetails>
            <div>
              {documentToReactComponents(
                data.contentfulPost.childContentfulPostContentRichTextNode.json
              )}
            </div>
            {/* <div></div> */}
          </PortfolioDetails>
        </PortfolioWrapper>
      </main>
    </Layout>
  )
}
export const data = graphql`
  query postTemplate($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      slug
      childContentfulPostContentRichTextNode {
        json
      }
      image {
        fluid(maxWidth: 1200, quality: 85) {
          src
        }
      }
    }
  }
`

export default postTemplate
