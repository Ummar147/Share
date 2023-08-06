import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateQuizProgress } from '../redux/actions/quizActions';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ImageSlideshow from './ImageSlideshow';

const QuizContainer = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px;
`;

const QuestionCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  flex: 1;
`;

const SlideshowCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  flex: 1;
`;

const QuestionText = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const OptionButton = styled.button`
  display: block;
  margin: 5px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s, color 0.2s;

  background-color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? '#2ecc71' // Green for correct option
        : '#e74c3c' // Red for incorrect option
      : 'transparent'};

  color: ${(props) => (props.isSelected ? '#fff' : '#333')};

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? '' : props.theme.secondary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryText};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.isCorrect !== undefined
      ? props.isCorrect
        ? '#2ecc71' // Green for correct answer
        : '#e74c3c' // Red for incorrect answer
      : '#34495e'}; // Default color
`;

const Progress = styled.progress`
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
    background-color: #3498db;
    border-radius: 5px;
  }
`;

const QuizPage = () => {
  const { quizId } = useParams();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quiz = quizzes.find((item) => item.id === parseInt(quizId));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(undefined); // Track correctness of the selected option
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleOptionClick = (optionId, isCorrect) => {
    setSelectedOption(optionId);
    setIsCorrect(isCorrect);
  };

  const handleSubmit = () => {
    if (selectedOption !== '') {
      const currentQuestion = quiz.questions[currentQuestionIndex];
      const score =
        currentQuestion.correctOptionId === parseInt(selectedOption) ? 1 : 0;

      dispatch(updateQuizProgress(quizId, score));

      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption('');
        setIsCorrect(undefined); // Reset correctness for the next question
      } else {
        history('/quiz-completed');
      }
    }
  };

  return (
    <>
      <Header />
      <QuizContainer>
        <QuestionCard>
          <h2>{quiz.title}</h2>
          {quiz.questions[currentQuestionIndex] && (
            <>
              <QuestionText>
                {quiz.questions[currentQuestionIndex].text}
              </QuestionText>
              {quiz.questions[currentQuestionIndex].options.map((option) => (
                <OptionButton
                  key={option.id}
                  onClick={() =>
                    handleOptionClick(
                      option.id,
                      option.id ===
                        quiz.questions[currentQuestionIndex].correctOptionId
                    )
                  }
                  isSelected={selectedOption === option.id}
                  isCorrect={
                    option.id ===
                    quiz.questions[currentQuestionIndex].correctOptionId
                  }
                >
                  {option.text}
                </OptionButton>
              ))}
              <SubmitButton
                onClick={handleSubmit}
                disabled={selectedOption === ''}
              >
                Next
              </SubmitButton>
            </>
          )}
        </QuestionCard>
        <SlideshowCard>
          <ImageSlideshow />
        </SlideshowCard>
      </QuizContainer>
      <FooterContainer isCorrect={isCorrect}>
        <Progress value={(currentQuestionIndex + 1) * 100 / quiz.questions.length} max="100" />
        {isCorrect !== undefined ? (isCorrect ? 'Correct' : 'Incorrect') : ''}
      </FooterContainer>
      <Footer />
    </>
  );
};

export default QuizPage;
