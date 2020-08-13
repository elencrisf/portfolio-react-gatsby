import styled, { css } from "styled-components";
import Icons from "../../components/Icons/icons";

export const EmailWrapper = styled(Icons.Email) `
    color: ${ props => props.color ? props.color : "red" };
    width: ${ props => props.width ? props.width : "100px" };

    ${props =>
        props.gatsby &&
        css`
            color: #402264;
            width: 35px;
        `
    };
`
export const PhoneWrapper = styled(Icons.Phone) `
    color: ${ props => props.color ? props.color : "red" };
    width: ${ props => props.width ? props.width : "100px" };

    ${props =>
        props.gatsby &&
        css`
            color: #402264;
            width: 35px;
        `
    };
`
export const LocationOnWrapper = styled(Icons.LocationOn) `
    color: ${ props => props.color ? props.color : "red" };
    width: ${ props => props.width ? props.width : "100px" };

    ${props =>
        props.gatsby &&
        css`
            color: #402264;
            width: 35px;
        `
    };
`
