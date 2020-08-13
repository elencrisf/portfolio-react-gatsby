import React from 'react';
// import { Link } from "gatsby"
// import Layout from "../components/Layout/layout"
import About from "../components/IndexPage/About/about";
import SEO from "../components/seo";

const about = () => {
 
    return (
        <>
            <SEO title="About" />
            <About />
        </>
    );
};

export default about;
