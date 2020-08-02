import React from 'react';
import { Link } from 'gatsby';
import * as Styled from './styled';
import Image from "../Images/image";
import "./card2.scss";

const Card2 = (props) => {
    return (
        <>
            <Styled.Card2Wrapper 
                className="card" 
                background={props.backgroundCard}
                primary={props.styleDefault}
                >
                <Image name={props.nameImage} />
                <div className="card-body">
                    <h5 className="card-title">{props.titleCard}</h5>
                    <p className="card-text">{props.textCard}</p>
                    <Link to="/" className={`btn btn-${props.colorButton}`}>Go somewhere</Link>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>             */}
                </div>
            </Styled.Card2Wrapper>
        </>
    );
};

export default Card2;