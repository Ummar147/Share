import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryText};
`;

const ProgressContainer = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
`;

const RankText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: -10px;
`;

const StatusCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatusText = styled.p`
  flex: 1;
  color: ${(props) => props.color};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActionButton = styled(Link)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.primaryText};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;

const GaugeContainer = styled.div`
  position: relative;
`;

const GaugeBackground = styled.circle`
  fill: none;
  stroke: #ccc;
  stroke-width: 10;
`;

const GaugeArc = styled.circle`
  fill: none;
  stroke-width: 10;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

const Range1 = styled.circle`
  fill: none;
  stroke: #e74c3c;
  stroke-width: 10;
`;

const Range2 = styled.circle`
  fill: none;
  stroke: #f39c12;
  stroke-width: 10;
`;

const Range3 = styled.circle`
  fill: none;
  stroke: #2ecc71;
  stroke-width: 10;
`;

const EmojiIcon = styled.text`
  font-size: 24px;
  text-anchor: middle;
  alignment-baseline: central;
  fill: #333;
`;

const QuizCompleted = () => {
  const generateRandomScore = () => {
    return Math.floor(Math.random() * 101);
  };

  const userScore = generateRandomScore();
  const redThreshold = 33;
  const yellowThreshold = 80;
  const gaugeOffset = 440 - (440 * userScore) / 100;

  const getRank = (score) => {
    if (score <= redThreshold) return 'Beginner';
    if (score <= yellowThreshold) return 'Intermediate';
    return 'Expert';
  };

  const getGaugeColor = (score) => {
    if (score <= redThreshold) return '#e74c3c';
    if (score <= yellowThreshold) return '#f39c12';
    return '#2ecc71';
  };

  const getEmojiIcon = (score) => {
    if (score <= redThreshold) return '😔';
    if (score <= yellowThreshold) return '😊';
    return '🎉';
  };

  return (
    <>
      <Header />
      <CompletedContainer>
        <ProgressContainer>
          <GaugeContainer>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <GaugeBackground cx="50" cy="50" r="45" />
           
              <GaugeArc
                cx="50"
                cy="50"
                r="45"
                stroke={getGaugeColor(userScore)}
                strokeDasharray="440"
                strokeDashoffset={gaugeOffset}
              />
              <EmojiIcon x="50" y="50">
                {getEmojiIcon(userScore)}
              </EmojiIcon>
            </svg>
          </GaugeContainer>
         
        </ProgressContainer>
         <RankText>{getRank(userScore)}</RankText>
        <StatusCard>
          <StatusText color="#2ecc71">Correct: 8</StatusText>
          <StatusText color="#e74c3c">Incorrect: 2</StatusText>
          <StatusText color="#3498db">Skipped: 0</StatusText>
        </StatusCard>
      </CompletedContainer>
      <FooterContainer>
        <ActionButton to="/" backgroundColor="#3498db">
          Continue
        </ActionButton>
        <ActionButton to="/quiz" backgroundColor="#e74c3c">
          Retake Quiz
        </ActionButton>
      </FooterContainer>
      <Footer />
    </>
  );
};

export default QuizCompleted;
