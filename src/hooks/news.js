import { graphql, useStaticQuery } from 'gatsby'

const NewsContent = () => {
    const data_news = useStaticQuery(graphql`
    query {
      allMdx(filter: {fields: {source: {eq: "news"}}}) {
        edges {
          node {
            fields {
              source
            }
            frontmatter {
              author
              slug
              title
            }
            excerpt
          }
        }
      }
    }
  `)
    return (
      data_news.allMdx.edges
    )
}

export default NewsContent