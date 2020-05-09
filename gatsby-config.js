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
    url: "http://www.robinsolanki.com",
    siteUrl: "http://www.robinsolanki.com",
    image: "/images/robinsolanki.jpg",
    twitterUsername: "@robinsolanki",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72351877-1",
        head: true,
      },
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
  ],
}
