import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";


const ImageProfile = (props) => {

    const { image01, image02, image03 } = useStaticQuery(graphql`
    query {
      image01: file(relativePath: { eq: "circuito.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image02: file(relativePath: { eq: "Image02.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image03: file(relativePath: { eq: "Image05.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

    return (
        <>
        {(() => {
            switch (props.name) {
                case 'image01':
                    return <BackgroundImage fluid={image01.childImageSharp.fluid} alt="Image01"/>
                case 'image02':
                    return <BackgroundImage fluid={image02.childImageSharp.fluid} alt="Image02"/>
                case 'image03':
                    return <BackgroundImage fluid={image03.childImageSharp.fluid} alt="Image03"/>    
                default:
                    return null;
            }
        })()}
        
        </>
    );
};

export default ImageProfile;