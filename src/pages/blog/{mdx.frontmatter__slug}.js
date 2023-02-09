import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../component/layout'
import { StaticImage } from 'gatsby-plugin-image'

const OnePostPg = ({ data, children }) => {
    return (
        <Layout>
            <div className='row'>
                <img className='imgnews' src='/images/catnews.jpg'></img>
                <div className='column'>
                    <h>{data.mdx.frontmatter.header}</h>
                    <p className="author">{data.mdx.frontmatter.author}</p>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default OnePostPg

export const Head = () => <title>Blog Page</title>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
      frontmatter {
        author
        slug
        header
      }
    }
  }
`