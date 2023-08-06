import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import TopicPage from './TopicPage';
import QuizPage from './QuizPage';
import QuizCompleted from './QuizCompleted';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const AppContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/quiz-completed" element={<QuizCompleted />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
