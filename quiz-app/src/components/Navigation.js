import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  min-width: 200px;
`;

const IconContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 24px;
    color: #3498db;
  }
`;

const Navigation = ({ topics }) => {
  return (
    <NavigationContainer>
      {topics.map((topic, index) => (
        <IconContainer key={index} to={`/topic/${topic.id}`}>
          {topic.icon}
        </IconContainer>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
