import React from 'react';
import Layout from "../components/Layout/layout";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from "../components/seo";
import cardStyles from "../components/Card/card.module.scss";
import TextImage from "../components/TextImages/textImage";

const Gallery = (props) => {

    const { gallery, textImg } = useStaticQuery(graphql`
        query {
            gallery: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
            nodes {
                id
                childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
            }
            textImg:   allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
            nodes {
                id
                name
            }
            }
        }
    `)


    return (
        <Layout>
            <SEO title="Gallery" />
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-4">Gallery</h1>
                    </div>
                </div>
                <div className="row">
                        {gallery.nodes.map(image => (
                            <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={image.id}>
                                <div className={cardStyles.container}>
                                    <Img className={cardStyles.image} fluid={image.childImageSharp.fluid} alt="Gallery" />  
                                    <div className={cardStyles.overlay}>
                                        <div className={cardStyles.text}>
                                            <div className="text">
                                                {/* <TextImage name="image01" /> */}
                                                <TextImage name=
                                                {textImg.nodes.map((text =>
                                                    <div key={text.id}>{text.name}</div>
                                                    ))}
                                                />

                                            </div>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </Layout>
    );
};

export default Gallery;