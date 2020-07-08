import React from "react"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero title="About" />
      <main>
        <div className="content">
          <p>
            A self-motivated and hardworking full-stack web developer with a
            background in computer science.
          </p>

          <p>
            I am fluent in all aspects of Rapid Prototyping and Development.
          </p>

          <p>
            Working with the best practices, keeping myself in sync with the
            latest technologies, writing best quality, well-documented,
            reusable, performant and readable code are some of my traits.
          </p>

          <p>
            I also possess skills in configuring and deploying production-ready
            web applications to VPS and a number of web host providers.
          </p>

          <p>
            Besides all the above I have a deep passion for technology and love
            to solve problems and learn new things.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
