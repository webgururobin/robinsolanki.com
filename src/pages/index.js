import React from "react"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Card from "../components/Card"

// styles

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Full Stack Website Developer" />
      <Hero
        title="Full Stack Website Developer"
        categories={["test", "test1"]}
      />
      <main>
        <Card />
      </main>
    </Layout>
  )
}

export default IndexPage
