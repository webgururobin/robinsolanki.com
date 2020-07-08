import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import favicon from "../../images/favicon.ico"

// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, article }) => {
  // const { location } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const Seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet title={Seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={Seo.description} />
      <meta name="image" content={Seo.image} />
      <link rel="icon" href={favicon} />

      {Seo.url && <meta property="og:url" content={Seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}

      {Seo.title && <meta property="og:title" content={Seo.title} />}

      {Seo.description && (
        <meta property="og:description" content={Seo.description} />
      )}

      {Seo.image && <meta property="og:image" content={Seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {Seo.title && <meta name="twitter:title" content={Seo.title} />}

      {Seo.description && (
        <meta name="twitter:description" content={Seo.description} />
      )}

      {Seo.image && <meta name="twitter:image" content={Seo.image} />}
    </Helmet>
  )
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
