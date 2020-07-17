import React from "react"
import { Link } from "gatsby"

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
        <Link className="button" to="/contact">
          Get in touch
        </Link>
      </CTA>

      <Copyright>
        <p>
          <Link to="/terms">Terms</Link> |{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <p>
          {" "}
          &copy; {new Date().getFullYear()} <a href={data.url}>{data.title}</a>
        </p>
        <p>
          Made with <span className="heart">&#x2665;</span> from Mumbai, India.
        </p>
      </Copyright>
    </>
  )
}

export default Footer
