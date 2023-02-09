import { graphql, useStaticQuery } from 'gatsby'

const NewsContent = () => {
    const data_news = useStaticQuery(graphql`
    query ($glob: String = "*") {
      allMdx(filter: {frontmatter: {title: {glob: $glob}}}) {
        nodes {
          frontmatter {
            title
            author
            slug
          }
          id
          excerpt
        }
      }
    }
  `)
    return (
      data_news.allMdx.nodes
    )
}

export default NewsContent