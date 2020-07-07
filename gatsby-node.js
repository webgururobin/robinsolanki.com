const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages
  const content = await graphql(
    `
      {
        portfolios: allContentfulPortfolio(
          filter: { node_locale: { eq: "en-US" } }
          sort: { fields: createdAt, order: DESC }
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }

        portfolioCategories: allContentfulPortfolioCategory(
          filter: { node_locale: { eq: "en-US" } }
          sort: { fields: createdAt, order: DESC }
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )

  // If there is any error return out of the function
  if (content.error) return

  const portfolioResult = content.data.portfolios.edges
  const portfolioCategoriesResult = content.data.portfolioCategories.edges

  portfolioResult.forEach(({ node }) => {
    createPage({
      path: `portfolio/${node.slug}`,
      component: path.resolve(`src/templates/portfolio.js`), // Create Pages for each markdown file
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id,
      },
    })
  })

  portfolioCategoriesResult.forEach(({ node }) => {
    createPage({
      path: `portfolio-category/${node.slug}`,
      component: path.resolve(`src/templates/portfolio-category.js`), // Create Pages for each markdown file
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id,
      },
    })
  })
}
