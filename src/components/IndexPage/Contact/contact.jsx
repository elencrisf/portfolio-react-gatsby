import React from 'react';
// import { Link } from "gatsby"
// import Layout from "../components/Layout/layout";
import * as Styled from "../../../styles/pages/contactStyles";
import "./contact.scss";
// import SEO from "../components/seo";
import Maps from "../../Maps/maps";

const Contact = () => {
    const text = "Hire me!";
    return (
        <>
        {/* <Layout> */}
        {/* <SEO title="Contact" /> */}
        <div className="contact container-fluid bg-gatsby-lightest" id="contact">
            <div className="container pb-5">
                <div className="row">
                    <div className="contact__title col-12">
                        <h1 className="text-center">Contact</h1>
                        <p className="text-center">{text}</p>
                    </div>
                    <div className="col-md-6 mb-5">
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputName">Name:</label> */}
                                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail">Email:</label> */}
                                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleFormControlTextarea1">Textarea:</label> */}
                                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="contact__button btn btn-gatsby">Send</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item bg-gatsby-lightest">
                                <Styled.EmailWrapper
                                        gatsby /> elen.crisf@uol.com.br</li>
                            <li className="list-group-item bg-gatsby-lightest">
                                <Styled.PhoneWrapper gatsby /> 1(604)868-7106</li>
                            <li className="list-group-item bg-gatsby-lightest">
                                <Styled.LocationOnWrapper gatsby /> MetroVancouver, BC - Canada </li>
                                {/* <Icons.LocationOn className="w-25 text-danger" />Location</li> */}
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <Maps />
                </div>
            </div>
        </div>
        {/* </Layout> */}
        </>
    );
};

export default Contact;