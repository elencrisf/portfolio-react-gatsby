import React from 'react';
// import { Link } from 'gatsby';
import * as Styled from './styled';
import Image from "../Images/image";
import "./card3.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import Img from "gatsby-image"

// import File from "../files/Resume-Elen.pdf"

const url = "../files/Resume-Elen.pdf";
console.log(url);

const Card3 = (props) => {
  
    return (
        <>
            <Styled.Card3Wrapper 
                className="card" 
                background={props.backgroundCard}
                primary={props.styleDefault}
                >
                <div className="row no-gutters">
                    <div className="col-md-7">
                        <div className="card3 card-body mt-4">
                            <h5 className="card3__title card-title mb-4">{props.titleCard}</h5>
                            {/* <p className="card3__text card-text mt-5">{props.textCard}</p> */}
                            {props.textCard.map((paragraph, index) => (
                                <p key={index} className="card3_text card-text text-center">{paragraph}</p>
                            ))}
                            <div className="card3__button mt-5">
                            <a href={url} target="_blank" rel="noopper noreferrer" download="Resume-Elen.pdf" className={`btn btn-${props.colorButton}`}>
                              <FontAwesomeIcon icon={faDownload} />Download Resume
                                {/* <File src={File} alt="text" />Download Resume */}
                                {/* < src={Pdf} type="application/pdf" width="100%" heigth="600px" />Download Resume */}
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <Image name={props.nameImage} />
                    </div>
                </div>

            </Styled.Card3Wrapper>
        </>
    );
};

export default Card3;







            //      <div className="col-12" key={id}>
            //      <div className="stories__card__row1__description card mb-3" style={{ width: "100%" }}>
            //        <div className="row no-gutters">
            //          <div className="col-md-5">
            //            <div className="card-body">
            //              <div>
            //              <h3 className="stories__card__row1__description__title card-title">{title}</h3>
            //                <p className="stories__card__row1__description__excerpt card-text">
            //                  {text.childMarkdownRemark.excerpt}
            //                </p>
            //              </div>
            //              <div className="mt-5">
            //                <Link to={`/successStories/${slug}`}>
            //                  <StyledButton outline={true}>
            //                    Read more
            //                  </StyledButton>
            //                </Link>
            //              </div>
            //            </div>
            //          </div>
            //          <div className="stories__card__row1__image col-md-7">
            //          <Img fluid={thumbnail.fluid} />
            //        </div>
            //        </div>
            //      </div>
            //    </div>