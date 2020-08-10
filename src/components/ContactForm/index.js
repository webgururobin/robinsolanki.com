import React from "react"
import { Link } from "gatsby"
//Styles
import { Wrapper } from "./ContactForm.styles"

const ContactForm = () => {
  return (
    <Wrapper>
      <form
        action="/thanks"
        method="post"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hide">
          <label htmlFor="bot">Don't fill this out, human</label>
          <input name="bot" id="bot" />
        </div>
        <label htmlFor="firstname"> First Name</label>
        <input
          required
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Your name.."
        />
        <label htmlFor="lastname"> Last Name</label>
        <input
          required
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label htmlFor="email"> Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />
        <label htmlFor="message"> Message</label>
        <textarea
          required
          id="message"
          name="message"
          placeholder="Your Message.."
        ></textarea>
        <label htmlFor="consent"> Consent</label>
        <input
          type="checkbox"
          className="checkmark"
          name="terms"
          value="accepted"
          required
        />
        I agree to <Link to="/terms">Terms and Conditions</Link>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default ContactForm
