/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Robin Solanki",
    titleTemplate: "%s | Full Stack Web Developer | Mumbai India",
    description: `Robin Solanki is a Full Stack Web Developer with expertise in Javascript and libraries such as React.js`,
    url: "https://www.robinsolanki.com",
    siteUrl: "https://www.robinsolanki.com",
    image: "/images/robinsolanki.jpg",
    twitterUsername: "@robinsolanki",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-72351877-1",
        head: false,
      },
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
  ],
}
