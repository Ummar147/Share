import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  topic: topicReducer,
  quiz: quizReducer,
});

export default rootReducer;
