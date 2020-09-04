import React from 'react';
import * as Styled from './styled';
import Image from "../Images/image";
import "./card3.scss";
import downloadFile from '../downloads/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


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
                            {props.textCard.map((paragraph, index) => (
                                <p key={index} className="card3_text card-text text-center">{paragraph}</p>
                            ))}
                            <div className="card3__button mt-5">
                                <a href={downloadFile} download="resume-elen.pdf" className={`btn btn-${props.colorButton}`}>
                                <FontAwesomeIcon icon={faDownload} /> Download Resume
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

