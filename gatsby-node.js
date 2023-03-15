// import React from "react"
const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const newsPostTemplate = path.resolve('./src/templates/news.js')
    const result = await graphql(`
        query {
            allMdx {
                edges {
                  node {
                    id
                    fields {
                      source
                    }
                    frontmatter {
                      author
                      header
                      slug
                      title
                    }
                  }
                }
              }
        }
        `)
      
        const posts = result.data.allMdx.edges.filter(edge => edge.node.fields.source === "blog")
        posts.forEach(edge => {
            createPage({
                path: `/blog/${edge.node.frontmatter.slug}`,
                component: blogPostTemplate,
                context: {
                  id: edge.node.id
                }
            })
        })
        const news = result.data.allMdx.edges.filter(edge => edge.node.fields.source === "news")
        news.forEach(edge => {
            createPage({
                path: `/news/${edge.node.frontmatter.slug}`,
                component: newsPostTemplate,
                context: {
                    id: edge.node.id
                }
            })
        })
     
    }