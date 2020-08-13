import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "circuito.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 710px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection



// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// // import BackgroundImage from "gatsby-background-image"
// import BackgroundImage from "gatsby-image";

// const ProfileBackground = ({ className, children }) => {
//     const data = useStaticQuery(graphql`
//     {
//       file(relativePath: {eq: "circuito.png"}) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
//     }
//   `)
//       // Set ImageData.
//       const imageData = data.file.childImageSharp.fluid
//       return (
//         <BackgroundImage Tag="section" className={className} fluid={imageData}>
//           {children}
//         </BackgroundImage>
//       )

// }

// export default ProfileBackground