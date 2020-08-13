import React from 'react';
// import { Link } from "gatsby"
// import Layout from "../components/Layout/layout";
// import * as Styled from "../styles/pages/contactStyles";
import SEO from "../components/seo";
import Contact from "../components/IndexPage/Contact/contact";
// import Maps from "../components/Maps/maps";

const contact = () => {
 
    return (
        <>
        <SEO title="Contact" />
        <Contact />

        </>
    );
};

export default contact;