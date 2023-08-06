 
// redux/actions/quizActions.js
import { UPDATE_QUIZ_PROGRESS } from '../actionTypes';


export const updateQuizProgress = (quizId, score) => {
  return {
    type: UPDATE_QUIZ_PROGRESS,
    payload: { quizId, score },
  };
};
