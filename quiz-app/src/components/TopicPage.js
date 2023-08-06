import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import styled from 'styled-components';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import Navigation from './Navigation'; // Import the Navigation component
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import the useSelector function

const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopicTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
`;

const QuizLink = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const TopicPage = ({ match }) => {
  // const { topicId } = match.params;
  // const topic = useSelector((state) => state.quiz.quizzes.find((t) => t.id === parseInt(topicId)));

  const { topicId } = useParams(); // Use useParams to get the topicId from URL params
  const topics = useSelector((state) => state.topic.topics);
  const topic = topics.find((item) => item.id === parseInt(topicId)); // Convert topicId to integer



  return (
    <>
      <Header />
    
      <TopicContainer>
        <TopicTitle>{topic.title}</TopicTitle>
        <div >
          {topic.quizzes.map((quiz) => (
            <QuizLink key={quiz.id} to={`/quiz/${quiz.id}`}>
              {quiz.title}
            </QuizLink>
          ))}
        </div>
      </TopicContainer>

      <Footer />
    </>
  );
};

export default TopicPage;
