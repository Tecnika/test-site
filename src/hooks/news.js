import { graphql, useStaticQuery } from 'gatsby'

const NewsContent = () => {
    const data = useStaticQuery(graphql`
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
      data.allMdx.nodes
    )
}

export default NewsContent