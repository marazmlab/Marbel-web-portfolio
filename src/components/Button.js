import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1.1rem;
    border: 1px solid ${({theme}) => theme.text};
    box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.text};
    color: ${({theme}) => theme.text};
    cursor: pointer;

    &:hover {
        background: ${({theme }) => theme.secondary};
        
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }

    
`;

const Button = ({ href, children, ...props}) => {
    let label = 'Check More'
    if ( href?.includes('github.com')) label = 'Check on Github';
    else if (href?.includes('behance.net')) label = 'Check on Behance';
    else if (href) label = 'Demo';
    return (
        <StyledButton href={href} target='_blank' rel='noopener noreferrer' {...props}>
            {label}
        </StyledButton>
    );
}

export default Button;