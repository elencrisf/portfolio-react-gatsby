import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";


const TextImage = (props) => {

  //   useStaticQuery(graphql`
  //   query {
  //     image01: file(relativePath: { eq: "Image01.jpg" }) {
  //       name
  //     }
  //     image02: file(relativePath: { eq: "Image02.jpg" }) {
  //       name
  //     }
  //     image03: file(relativePath: { eq: "Image03.jpg" }) {
  //       name
  //     }
  //     image04: file(relativePath: { eq: "Image04.jpg" }) {
  //       name
  //     }
  //     image05: file(relativePath: { eq: "Image05.jpg" }) {
  //       name
  //     }
  //     image06: file(relativePath: { eq: "Image06.jpg" }) {
  //       name
  //     }
  //   }
  // `)

    return (
        <>
        {(() => {
            switch (props.name) {
                case 'image01':
                  return <div>
                    <h3>Hello Word 1</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'image02':
                  return <div>
                    <h3>Hello Word 2</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'image03':
                  return <div>
                    <h3>Hello Word 3</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    {/* <a href="https://elencrisf.github.io/lyrics-songs">Twitter</a> */}
                    {/* <p>Look this <a href="https://elencrisf.github.io/lyrics-songs">Project</a>!</p> */}
                  </div>
                case 'image04':
                  return <div>
                    <h3>Hello Word 4</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'image05':
                  return <div>
                    <h3>Hello Word 5</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'image06':
                  return <div>
                    <h3>Hello Word 6</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                default:
                  return null;
            }
        })()}
        
        </>
    );
};

export default TextImage;