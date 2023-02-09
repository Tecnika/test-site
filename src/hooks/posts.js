import { graphql, useStaticQuery } from 'gatsby'

const PostsContent = () => {
    const data = useStaticQuery(graphql`
    query ($glob: String = "*") {
      allMdx(filter: {frontmatter: {header: {glob: $glob}}}) {
        nodes {
          frontmatter {
            header
            slug
            author   
            title
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

export default PostsContent