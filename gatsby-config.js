module.exports = {
  siteMetadata: {
    title: `Taylor Bryant - Front-end Developer`,
    author: `Taylor Bryant`
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    }
  ]
};
