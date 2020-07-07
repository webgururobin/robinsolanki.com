import React from "react"

// Styles
import { Wrapper } from "./Hero.styles"

const Hero = ({ title, categories }) => {
  console.log(categories)

  return (
    <Wrapper>
      <h1>{title}</h1>
      <ul>
        {categories && categories.map(cat => <li key={cat.id}>{cat.title}</li>)}
      </ul>
    </Wrapper>
  )
}

export default Hero
