import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 20px;
  background-color: #3498db;
  color: #fff;
`;

const Title = styled.h1`
  margin: 0;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Quiz</Title>
      <LogoutButton>Logout</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
