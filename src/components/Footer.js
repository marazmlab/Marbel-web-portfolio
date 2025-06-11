import React from "react";
import styled from "styled-components";


const StyledFooter = styled.footer`
    
    color: ${({ theme }) => theme.text};
    text-align: center;
    padding: 1rem;
`

const Footer = () => (
  <StyledFooter>
    <p>© {new Date().getFullYear()} Marek Bełz - marbel.tech</p>
  </StyledFooter>
);

export default Footer;