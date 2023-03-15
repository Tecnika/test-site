import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/layout'

const OneNewsPg = ({ data, children }) => {

  return (
    <Layout>
      <div className='column'>
        <img src="/images/cats_banner.jpg" alt='banner'/>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p className="author">{data.mdx.frontmatter.author}</p>
       <p className='pre-wrap'> {data.mdx.body}</p>
      </div>

    </Layout>
  )
}

export default OneNewsPg

export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
      frontmatter {
        author
        slug
        title
      }
      body
    }
  }
`