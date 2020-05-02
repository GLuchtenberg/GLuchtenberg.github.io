module.exports = {
  siteMetadata: {
    title: `Gabriel Luchtenberg`,
    description: `Passionate dev. I bring questions, not answers`,
    author: `@GLuchtenberg`,
    siteUrl: "https://github.com.br/GLuchtenberg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //loader
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0E91F0`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `500`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
