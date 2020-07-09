import React from "react"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const ThankyouPage = () => {
  return (
    <Layout>
      <Seo title="Thank You!" />
      <Hero title="Thank You!" />
      <div className="content">
        <p className="center">
          Thank you for your message, I'll get back to you soon.
        </p>
      </div>
    </Layout>
  )
}

export default ThankyouPage
