import React from "react";
import styled from "styled-components";

const StyledLabel = styled.span`
    display: inline-block;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.3rem;
    border: 1px solid ${({theme}) => theme.text};
    color: ${({theme}) => theme.text};
    font-size: 0.8rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0;
        margin-right: 1rem;
        margin-bottom: 0.5rem;
        font-size: 0.7rem;
    }
`;

const Label = ({ children, ...props}) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
}

export default Label;