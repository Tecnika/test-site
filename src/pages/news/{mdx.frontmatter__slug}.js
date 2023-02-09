import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../component/layout'

const OneNewsPg = ({ data, children }) => {

  return (
    <Layout>
      <div className='column'>
        <img src="/images/cats_banner.jpg" alt='banner'/>
        <h>{data.mdx.frontmatter.title}</h>
        <p className="author">{data.mdx.frontmatter.author}</p>
        {children}
      </div>

    </Layout>
  )
}

export default OneNewsPg

export const Head = () => <title>Blog Page</title>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
      frontmatter {
        author
        slug
        title
      }
    }
  }
`