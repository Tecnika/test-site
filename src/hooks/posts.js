import { graphql, useStaticQuery } from 'gatsby'

const PostsContent = () => {
    const data_post = useStaticQuery(graphql`
    query {
      allMdx(filter: {fields: {source: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              source
            }
            frontmatter {
              author
              slug
              header
            }
            excerpt
          }
        }
      }
    }
  `)
    return (
      data_post.allMdx.edges
    )
}

export default PostsContent