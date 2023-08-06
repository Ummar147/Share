import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
position: fixed;
bottom: 0; 
width: 100%;
  align-items: center;
  padding: 10px 20px;
  background-color: #34495e;
`;

const NextButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <progress value="50" max="100" />
      <NextButton>Next</NextButton>
    </FooterContainer>
  );
};

export default Footer;
