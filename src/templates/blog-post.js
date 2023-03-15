import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/layout'

const OnePostPg = ({ data, children }) => {
    return (
        <Layout>
            <div className='row'>
                <img className='imgnews' src='/images/catnews.jpg'></img>
                <div className='column'>
                    <h1>{data.mdx.frontmatter.header}</h1>
                    <p className="author">{data.mdx.frontmatter.author}</p>
                    <p className='pre-wrap'>{data.mdx.body}</p> 
                </div>
            </div>
        </Layout>
    )
}

export default OnePostPg

export const Head = ({data}) => <title>{data.mdx.frontmatter.header}</title>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
      frontmatter {
        author
        slug
        header
      }
    }
  }
`