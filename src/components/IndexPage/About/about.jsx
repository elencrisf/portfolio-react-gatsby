import React from 'react';
// import { Link } from "gatsby"
// import Layout from "../components/Layout/layout"
import Card3 from "../../Card3/card3"
// import SEO from "../components/seo"
import "./about.scss";

const About = () => {
    // const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab reprehenderit culpa, inventore incidunt quam earum aliquid dolor deleniti necessitatibus soluta quibusdam debitis ut minus sint aut saepe tempora? Eum, quidem.";
    const text = [
        "I am an Engineer Technology and Web Developer, constantly looking for improving my skills and knowledge. I like to be connected with news in the technologies world. I learn and help others as well I can do that and always I do my best in the work.",
        " I worked with traffic system management. I also have experience with map data manipulation for traffic engineering in geoprocessing, improving management and process, I helped in many tools and specifics technologies for traffic engineering. Despite not programming during that time I had the opportunity to learn more about new technologies, project management, customer success, responsibilities with meetings' management.",
        " When I'm not working or studying I love to take pictures and walk in the parks with my family."
    ];

    return (
        <>
        {/* <Layout> */}
            {/* <SEO title="About" /> */}
        <div className="aboutImage" id="about">
        <div className="container-fluid">
        </div>
        </div>
        <div className="about">
            <div className="container px-5">
                <div className="about__title">
                    <div className="row">
                        <div className="col-12 py-4 justify-content-center">
                                <h1 className="text-center">About</h1>
                                <h5 className="text-center pt-3">"Art must be an expression of love or it is nothing."</h5>
                                <p className="text-center">-Marc Chagall</p>
                                <h6 className="text-center py-3">My name is Elen
                                </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__card">
                <div className="container px-5">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <Card3
                            nameImage="image02"
                            titleCard="I'm from Brazil and I'm based in Vancouver, Canada."
                            textCard={text}      
                            colorButton="gatsby"
                            backgroundCard="rgba(255, 239, 219, 0.7)"
                            styleDefault={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* </Layout> */}

        </>
    );
};

export default About;