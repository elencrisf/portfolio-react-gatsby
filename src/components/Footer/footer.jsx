import React from 'react';
import * as Styled from './styled';
import { useStaticQuery, graphql } from "gatsby";
import "./footer.scss";

const Footer = () => {

    const { 
        site: {
            siteMetadata: {
              // author,
              description,
              copyright,
              socialMedia: {
                facebook,
                github,
                linkedin
              }
            }
        }
    } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          copyright
          socialMedia {
            facebook
            github
            linkedin
          }
        }
      }
    }
  `)

    return (
      // <footer>
        <div className="bg-gatsby-dark">
          <div className="footer">
            <div className="container">
              <div className="footer__icon">
                <div className="row text-white py-4">
                  <div className="col-md-6 text-center mb-3">{description}</div>
                  <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                      <a href={github} target="_blank" rel="noopper noreferrer" >
                      <Styled.GithubIcon />
                      </a>
                      <a href={facebook} target="_blank" rel="noopper noreferrer" >
                      <Styled.FacebookIcon />
                      </a>
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" >
                      <Styled.LinkedinIcon />
                      </a>
                  </div>
                </div>
                </div>
            </div>
            <div className="container-fluid">
              <div className="footer__copyright">
                <div className="row bg-gatsby-darkest text-white py-3">
                  <div className="col-12 d-flex justify-content-center">
                    {copyright}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      // </footer>

    );
};

export default Footer;