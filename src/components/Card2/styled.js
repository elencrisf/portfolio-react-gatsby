import styled, { css } from 'styled-components'

export const Card2Wrapper = styled.div`
    background: ${ props => props.background ? props.background : "#e3a617" };
    h5 {
        color: rgb(82, 5, 145);
    }

    p {
        color: rgb(82, 5, 145);
    }

    ${props =>
        props.primary &&
        css`
        background: #8a4baf;

        h5 {
            color:#f1defa;
        }

        p {
            color: #f1defa;
        }
        `
    };

`