import React from "react"

// Styles
import { Wrapper } from "./Hero.styles"

const Hero = ({ title, categories }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <ul>{categories && categories.map(cat => <li key={cat}>{cat}</li>)}</ul>
    </Wrapper>
  )
}

export default Hero
