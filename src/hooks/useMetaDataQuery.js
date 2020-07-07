import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}
