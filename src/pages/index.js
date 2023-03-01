import * as React from "react"

import Layout from "../component/layout"

const IndexPage = () => {
  return (
    <Layout>
    <p>I don't know what to write in the website example, so here are the CATS!</p>
    <img src="/images/cats.jpg"/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Start Page</title>
