import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";


const TextImage = (props) => {

    useStaticQuery(graphql`
    query {
      Image01: file(relativePath: { eq: "Image01.jpg" }) {
        name
      }
      Image02: file(relativePath: { eq: "Image02.jpg" }) {
        name
      }
      Image03: file(relativePath: { eq: "Image03.jpg" }) {
        name
      }
      Image04: file(relativePath: { eq: "Image04.jpg" }) {
        name
      }
      Image05: file(relativePath: { eq: "Image05.jpg" }) {
        name
      }
      Image06: file(relativePath: { eq: "Image06.jpg" }) {
        name
      }
    }
  `)

    return (
        <>
        {(() => {
            switch (props.name) {
                case 'Image01':
                  return <h1>Hello World 1</h1>
                case 'Image02':
                  return <h1>Hello World 2</h1>
                case 'Image03':
                  return <h1>Hello World 3</h1>
                case 'Image04':
                  return <h1>Hello World 4</h1> 
                case 'Image05':
                  return <h1>Hello World 5</h1> 
                case 'Image06':
                  return <h1>Hello World 6</h1> 
                default:
                  return null;
            }
        })()}
        
        </>
    );
};

export default TextImage;