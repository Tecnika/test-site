/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `News`,
        path: `${__dirname}/src/content/news/`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Blog`,
        path: `${__dirname}/src/content/posts/`,
      }
    },
  ],
}
