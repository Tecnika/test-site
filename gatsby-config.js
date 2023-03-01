/**
 * @type {import('gatsby').GatsbyConfig}
 */const path = require('path')
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-mdx",
    `gatsby-plugin-mdx-source-name` ,
    // 'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/content/news/`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/posts/`,
      }
    },
  ],
}
