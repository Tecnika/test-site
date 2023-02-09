import * as React from "react"
import Layout from "../component/layout"
import PostTemp from "../component/post_temp"
import PostsContent from "../hooks/posts"

const BlogPage = () => {
  return (
    <Layout>
     {
        PostsContent().map((node, index) => (
          <PostTemp key={node.id} node={node}> 
          </PostTemp>
        ))
      }
    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog Page</title>
