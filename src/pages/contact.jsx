import React from 'react';
// import { Link } from "gatsby"
import Layout from "../components/Layout/layout";
import * as Styled from "../styles/pages/contactStyles"
import SEO from "../components/seo";

const Contact = () => {
    const text = "Lorem ipsum dolor sit amet consectetur";
    return (
        <>
        <Layout>
        <SEO title="Contact" />
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>Contact</h1>
                        <p>{text}</p>
                    </div>
                    <div className="col-md-6 mb-5">
                        <form>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputName">Name:</label> */}
                                <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail">Email:</label> */}
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
                            </div>
                            <div class="form-group">
                                {/* <label htmlFor="exampleFormControlTextarea1">Textarea:</label> */}
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="TextArea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Send</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Styled.EmailWrapper
                                        danger />elen.cris@uol.com.br</li>
                            <li className="list-group-item">
                                <Styled.PhoneWrapper danger />1(604)868-7106</li>
                            <li className="list-group-item">
                                <Styled.LocationOnWrapper danger />MetroVancouver, BC - Canada </li>
                                {/* <Icons.LocationOn className="w-25 text-danger" />Location</li> */}
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                <p>Follow me on <a href="https://twitter.com/gatsbyjs">Twitter</a>!</p>
                </div>
            </div>
        </Layout>
        </>
    );
};

export default Contact;