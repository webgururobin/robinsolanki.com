import React from "react"

//Hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// Styles
import { ClientWrapper, Copyright, CTA } from "./Footer.styles"

const Footer = () => {
  const data = useMetaDataQuery()
  return (
    <>
      <ClientWrapper>
        <div>
          <h3>
            50+ <br />
            Clients
          </h3>
        </div>
        <div>
          <h3>
            250+ <br />
            Projects
          </h3>
        </div>
        <div>
          <h3>
            10+ <br />
            Nations
          </h3>
        </div>
      </ClientWrapper>
      <CTA>
        <h2>Want to collaborate?</h2>
        <a className="button" href="mailto:hello@robinsolanki.com">
          Get in touch
        </a>
      </CTA>

      <Copyright>
        <p>
          {" "}
          &copy; {new Date().getFullYear()} <a href={data.url}>{data.title}</a>
        </p>
        <p>
          Made with <span className="heart">&#x2665;</span> in Mumbai, India.
        </p>
      </Copyright>
    </>
  )
}

export default Footer
