import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";


const LinkImage = (props) => {

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
                case 'link01':
                  return <div>
                    <h3>Hello Word 1</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'link02':
                  return <div>
                    <h3>Hello Word 2</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'link03':
                  return <div>
                    {/* <h3>Hello Word 3</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    <a href="https://elencrisf.github.io/lyrics-songs">Lyrics</a>
                    {/* <p>Look this <a href="https://elencrisf.github.io/lyrics-songs">Project</a>!</p> */}
                  </div>
                case 'link04':
                  return <div>
                    <a href="https://elencrisf.github.io/lyrics-songs">Lyrics</a>
                    {/* <h3>Hello Word 4</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                  </div>
                case 'link05':
                  return <div>
                    <h3>Hello Word 5</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                case 'link06':
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

export default LinkImage;