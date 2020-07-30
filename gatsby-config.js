module.exports = {
  siteMetadata: {
    title: `Portfolio Elen Ferreira`,
    description: `Portfolio Elen Ferreira React Gatsby`,
    author: `@ElenFerreira`,
    copyright: `© Copyright - All Rights Reserved`,
    siteUrl: `http://www.example.com`,
    socialMedia: {
      github: 'https://github.com/elencrisf',
      linkedin: 'https://www.linkedin.com/in/elen-cristina-ferreira-715a751ab/',
      facebook: 'https://www.facebook.com/elencrisf/'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `GSD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Image05.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
