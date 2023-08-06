// redux/reducers/quizReducer.js
import { UPDATE_QUIZ_PROGRESS } from '../actionTypes';
import dummyData from './dummyData'; // Import the dummy data

const initialState = {
  quizzes: dummyData.topics.reduce((acc, topic) => acc.concat(topic.quizzes), []),
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUIZ_PROGRESS:
      const { quizId, score } = action.payload;
      const updatedQuizzes = state.quizzes.map((quiz) =>
        quiz.id === quizId ? { ...quiz, score } : quiz
      );

      return { ...state, quizzes: updatedQuizzes };
    default:
      return state;
  }
};

export default quizReducer;
