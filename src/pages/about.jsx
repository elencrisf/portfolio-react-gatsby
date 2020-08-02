import React from 'react';
// import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import Card2 from "../components/Card2/card2"
import SEO from "../components/seo"

const About = () => {
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab reprehenderit culpa, inventore incidunt quam earum aliquid dolor deleniti necessitatibus soluta quibusdam debitis ut minus sint aut saepe tempora? Eum, quidem.";

    return (
        <>
        <Layout>
            <SEO title="About" />
            <div className="container px-5">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1 className="text-center">About</h1>
                        <h6 className="text-center pt-3">"Art must be an expression of love or it is nothing."</h6>
                        <p className="text-center">-Marc Chagall</p>
                        <h6 className="text-center py-3">{text}</h6>
                    </div>
                </div>
            </div>


            <div className="container px-5">
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <Card2
                        nameImage="image01"
                        titleCard="Card Title 01"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus voluptas animi doloribus labore cumque nisi, culpa adipisci recusandae doloremque et similique dignissimos officiis sint, ea excepturi placeat blanditiis repellat?"
                        colorButton="gatsby"
                        backgroundCard="#e2a617"
                        styleDefault={true}
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Card2
                        nameImage="image02"
                        titleCard="Card Title 02"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus voluptas animi doloribus labore cumque nisi, culpa adipisci recusandae doloremque et similique dignissimos officiis sint, ea excepturi placeat blanditiis repellat?"
                        colorButton="warning"
                        backgroundCard=""
                        styleDefault={false}
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Card2 
                        nameImage="image03"
                        titleCard="Card Title 03"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus voluptas animi doloribus labore cumque nisi, culpa adipisci recusandae doloremque et similique dignissimos officiis sint, ea excepturi placeat blanditiis repellat?"
                        colorButton="gatsby"
                        backgroundCard="#e2a617"
                        styleDefault={true}
                        />
                    </div>
                </div>
            </div>
        </Layout>

        </>
    );
};

export default About;
