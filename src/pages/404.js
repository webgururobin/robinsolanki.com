import React from "react"

// Components
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 NOT FOUND" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist ... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
