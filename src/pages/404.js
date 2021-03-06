import React from "react"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 NOT FOUND" />
      <Hero title="404 NOT FOUND" />
      <div className="content">
        <p className="center">
          You just hit a route that doesn't exist ... the sadness.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
