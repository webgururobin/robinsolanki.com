import React from "react"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 NOT FOUND" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist ... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
