import React from "react"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero title="About" />
      <main>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo
            quisquam possimus! Laborum, quam! Illum vitae voluptatibus
            perferendis sed delectus quo, nostrum facere soluta ab laudantium,
            itaque suscipit dolores. Impedit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam quo quisquam possimus!
            Laborum, quam! Illum vitae voluptatibus perferendis sed delectus
            quo, nostrum facere soluta ab laudantium, itaque suscipit dolores.{" "}
            <a href="#">Impedit</a>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            autem, odit provident earum consequatur quam architecto libero ut
            repudiandae natus ad optio, unde neque laborum voluptates velit
            obcaecati quia odio.
          </p>
          <h2>Heading2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            autem, odit provident earum consequatur quam architecto libero ut
            repudiandae natus ad optio, unde neque laborum voluptates velit
            obcaecati quia odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            autem, odit provident earum consequatur quam architecto libero ut
            repudiandae natus ad optio, unde neque laborum voluptates velit
            obcaecati quia odio.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
