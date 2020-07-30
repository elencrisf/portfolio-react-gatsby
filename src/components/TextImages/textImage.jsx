import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";


const TextImage = (props) => {

    useStaticQuery(graphql`
    query {
      image01: file(relativePath: { eq: "Image01.jpg" }) {
        name
      }
      image02: file(relativePath: { eq: "Image02.jpg" }) {
        name
      }
      image03: file(relativePath: { eq: "Image03.jpg" }) {
        name
      }
      image04: file(relativePath: { eq: "Image04.jpg" }) {
        name
      }
      image05: file(relativePath: { eq: "Image05.jpg" }) {
        name
      }
      image06: file(relativePath: { eq: "Image06.jpg" }) {
        name
      }
    }
  `)

    return (
        <>
        {(() => {
            switch (props.name) {
                case 'image01':
                  return <h1>Hello World 1</h1>
                case 'image02':
                  return <h1>Hello World 2</h1>
                case 'image03':
                  return <h1>Hello World 3</h1>
                case 'image04':
                  return <h1>Hello World 4</h1> 
                case 'image05':
                  return <h1>Hello World 5</h1> 
                case 'image06':
                  return <h1>Hello World 6</h1> 
                default:
                  return null;
            }
        })()}
        
        </>
    );
};

export default TextImage;