const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Portfolio Elen Ferreira`,
    description: `Portfolio Elen Ferreira`,
    author: `@ElenFerreira`,
    copyright: `© 2020 ELEN FERREIRA | All Rights Reserved`,
    siteUrl: `https://elenferreira.netlify.app/`,
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
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`300`, `400`, `800`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },  
    // },
    // {
      // resolve: `gatsby-source-unsplash`,
      // options: {
      //   appId: `12345678`,
      //   collections: [
    //       `098765`
    //     ],
      //   // optional: will only get page 1, so increase this count to include > 10 photos
      //   perPage: `100`
    //   },
    // },
    // {
    //   resolve: `gatsby-source-googlemaps-static`,
    //   options: {
    //       key: `process.env.GOOGLE_MAPS_STATIC_API_KEY`,
    //       center: `Surrey, BC`,
    //   },
    // },
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
        icon: `src/images/Elen-perfil.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
