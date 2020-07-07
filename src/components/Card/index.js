import React from "react"
import { Link } from "gatsby"
// Styles
import { CardSingle } from "./Card.styles"

const Card = ({ data, type }) => {
  return (
    <CardSingle>
      <img src={data.image.fluid.src} alt={data.title} />
      <div>
        <strong>{type}</strong>
        <h2 className="card__title">
          <Link to={`/portfolio/${data.slug}`}>{data.title}</Link>
        </h2>
        <ul>
          {data.portfolioCategory.map(cat => (
            <li key={cat.slug}>
              <Link to={`/${cat.slug}`}>{cat.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </CardSingle>
  )
}

export default Card
