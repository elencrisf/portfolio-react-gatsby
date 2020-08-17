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
                    <h3>Weather App</h3>
                    <p> I used React, with Context and Openweather API in this project.</p>
                  </div>
                case 'image02':
                  return <div>
                    <h3>Form Ecommerce</h3>
                    <p> This project I used html and CSS and formspree form.</p>
                  </div>
                case 'image03':
                  return <div>
                    <h3>Lyrics and Deezer API</h3>
                    <p> I did this project with html and fetched two API about lyrics and short MP3 songs in Deezer App.</p>
                  </div>
                case 'image04':
                  return <div>
                    <h3>Tasks Manager Project</h3>
                    <p> Done with React, I used Hook and Redux for creating tasks diary.</p>
                  </div>
                case 'image05':
                  return <div>
                    <h3>Landing Page client Riipen</h3>
                    <p> Done with React and Gatsby. I did the section About Larry Linton.</p>
                  </div>
                case 'image06':
                  return <div>
                    <h3>Website Impactraction</h3>
                    <p> We used React and Gatsby. I did the Success Stories page. We linked with a Contentful Headless data.</p>
                  </div>
                default:
                  return null;
            }
        })()}
        
        </>
    );
};

export default TextImage;