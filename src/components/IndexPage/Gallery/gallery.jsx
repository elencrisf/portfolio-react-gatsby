import React from 'react';
// import Layout from "../components/Layout/layout";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import SEO from "../components/seo";
import "./gallery.scss";
import cardStyles from "../../Card/card.module.scss";
import TextImage from "../../TextImages/textImage";

const Gallery = (props) => {

    const imageTitles = ['image01','image02','image03','image04','image05','image06'];
    // const imageLink = ['link1', 'link2', 'link3', 'link4', 'link5', 'link6'];

    const { gallery } = useStaticQuery(graphql`
        query {
            gallery: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
            nodes {
                id
                name
                childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
            }
        }
    `)

    return (
        <>
        {/* <Layout> */}
            {/* <SEO title="Gallery" /> */}
            <div className="gallery">
            <div className="container-fluid py-5 px-5">
                <div className="gallery__title">
                    <div className="row">
                        <div className="col-12">
                            <h1 className=" mb-4 text-center">Projects</h1>
                        </div>
                    </div>
                </div>
                <div className="gallery__image">
                    <div className="row">
                            {gallery.nodes.map((image, indexNumber) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={image.id}>
                                    <a href="http://www.google.com.br">
                                    <div className={cardStyles.cardContainer}>
                                        <Img className={cardStyles.image} fluid={image.childImageSharp.fluid} alt="Gallery" />  
                                        <div className={cardStyles.overlay}>
                                            <div className={cardStyles.text}>
                                                <div className="text">
                                                    <TextImage name={imageTitles[indexNumber]} />
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            </div>
        {/* </Layout> */}
        </>
    );
};

export default Gallery;