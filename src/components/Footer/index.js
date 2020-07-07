import React from "react"

//Hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// Styles
import { Wrapper } from "./Footer.styles"

const Footer = () => {
  const data = useMetaDataQuery()
  return (
    <Wrapper>
      <p>
        {" "}
        &copy; {new Date().getFullYear()} <a href={data.url}>{data.title}</a>
      </p>
      <p>Made with &hearts; from Mumbai, India.</p>
    </Wrapper>
  )
}

export default Footer
