import React from "react"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Hero title="Contact" />
      <div className="content">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default ContactPage
