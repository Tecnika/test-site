import * as React from "react"
import Layout from "../component/layout"
import NewsTemp from "../component/news_temp"
import NewsContent from "../hooks/posts"

const NewsPage = () => {
  return (
    <Layout>
      <div className="posts_content">
     {
        NewsContent().map((node, index) => (
          <NewsTemp key={node.id} node={node}> 
          </NewsTemp>
        ))
      }</div>
    </Layout>
  )
}

export default NewsPage

export const Head = () => <title>News Page</title>
