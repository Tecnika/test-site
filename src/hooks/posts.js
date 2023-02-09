import { graphql, useStaticQuery } from 'gatsby'

const PostsContent = () => {
    const data_post = useStaticQuery(graphql`
    query ($glob: String = "*") {
      allMdx(filter: {frontmatter: {header: {glob: $glob}}}) {
        nodes {
          frontmatter {
            header
            slug
            author   
          }
          id
          excerpt
        }
      }
    }
  `)
    return (
      data_post.allMdx.nodes
    )
}

export default PostsContent