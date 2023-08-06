import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px;
  flex: 1;
`;

const ProgressList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProgressItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    font-size: 18px;
    margin-right: 10px;
    color: #3498db;
  }

  span {
    font-size: 16px;
    color: #333;
  }
`;

const ColoredProgressBar = styled.progress`
  width: 100%;
  height: 10px;
  appearance: none;
  border: none;
  border-radius: 5px;

  &::-webkit-progress-bar {
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.color};
    border-radius: 5px;
  }
`;

const ProgressBar = ({ progressItems }) => {
  return (
    <ProgressBarContainer>
      <ProgressList>
        {progressItems.map((item, index) => (
          <ProgressItem key={index}>
            {item.icon}
            <span>{item.title}</span>
            <ColoredProgressBar color={item.color} value={item.value} max="100" />
          </ProgressItem>
        ))}
      </ProgressList>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
