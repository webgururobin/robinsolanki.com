/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Robin Solanki",
    titleTemplate: "%s | Full Stack Web Developer | Mumbai India",
    author: "@robinsolanki",
    description: `Robin Solanki is a Full Stack Web Developer with expertise in Javascript and libraries such as React.js`,
    url: "https://www.robinsolanki.com",
    siteUrl: "https://www.robinsolanki.com",
    image: "/images/robinsolanki.jpg",
    twitterUsername: "@robinsolanki",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tlfocu44dp3s`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-72351877-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robin Solanki`,
        short_name: `robin-solanki`,
        start_url: `/`,
        background_color: `#f06666`,
        theme_color: `#f06666`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
